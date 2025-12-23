import { useState, useEffect } from 'react'
import type { Bank, ComparisonState } from './types'
import { BankCard, SelectedBanks, ComparisonView, SearchBar } from './components'
import { useBankDataCache } from './hooks'
import './App.css'

const bankColors: Record<string, { primary: string; secondary: string }> = {
  'banco_001': { primary: '#003DA5', secondary: '#0066CC' },
  'banco_002': { primary: '#00A0DF', secondary: '#005EB8' },
  'banco_003': { primary: '#D50032', secondary: '#990024' }
}

// Valida que los datos tengan la estructura correcta
const validateBankData = (data: any[]): Bank[] => {
  return data.filter(bank => {
    if (!bank.id || !bank.name) {
      console.warn(`⚠️ Banco inválido omitido:`, bank)
      return false
    }

    // Normalizar estructura: algunos bancos usan "items" en lugar de "benefits"
    let benefits = bank.benefits || bank.items || []
    if (!Array.isArray(benefits)) {
      console.warn(`⚠️ ${bank.name} no tiene benefits/items válido`)
      return false
    }

    // Normalizar cada beneficio
    bank.benefits = benefits.filter((benefit: any) => {
      // Normalizar campos que pueden tener nombres diferentes
      const id = benefit.id || `ben_${Math.random().toString(36).substr(2, 9)}`
      const company = benefit.company || benefit.title || ''
      const discount = benefit.discount || benefit.extra || ''

      if (!company || !discount) {
        console.warn(`⚠️ Beneficio incompleto omitido en ${bank.name}:`, benefit)
        return false
      }

      // Normalizar el objeto benefit
      benefit.id = id
      benefit.company = company
      benefit.discount = discount
      benefit.category = benefit.category || ''
      benefit.description = benefit.description || `Beneficio con ${company}`
      benefit.valid_until = benefit.valid_until || ''
      benefit.valid_days = Array.isArray(benefit.valid_days) ? benefit.valid_days : []
      benefit.requirements = benefit.requirements || ''

      return true
    })
    
    if (bank.benefits.length === 0) {
      console.warn(`⚠️ ${bank.name} no tiene beneficios válidos después de la validación`)
      return false
    }

    return true
  })
}

function App() {
  const [banks, setBanks] = useState<Bank[]>([])
  const [filteredBanks, setFilteredBanks] = useState<Bank[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState<'api' | 'json' | 'cache'>('json')
  const [searchTerm, setSearchTerm] = useState('')
  const [comparisonState, setComparisonState] = useState<ComparisonState>({
    selectedBanks: [],
    maxSelection: 2
  })

  // Hook para manejar el cache
  const { getCachedData, saveToCacheWithTimestamp, isCacheValid, clearExpiredCache, cacheAge } = useBankDataCache()

  // Función para filtrar beneficios
  const filterBenefits = (banks: Bank[], searchTerm: string): Bank[] => {
    if (!searchTerm.trim()) return banks

    const lowercaseSearch = searchTerm.toLowerCase()
    
    return banks.map(bank => ({
      ...bank,
      benefits: bank.benefits.filter(benefit => 
        benefit.company.toLowerCase().includes(lowercaseSearch) ||
        benefit.category.toLowerCase().includes(lowercaseSearch) ||
        benefit.description.toLowerCase().includes(lowercaseSearch) ||
        benefit.discount.toLowerCase().includes(lowercaseSearch)
      )
    })).filter(bank => bank.benefits.length > 0)
  }

  useEffect(() => {
    const fetchData = async () => {
      // Limpiar cache expirado al inicio
      clearExpiredCache()

      // Cargar primero desde cache para mostrar algo rápido
      const cachedBanks = getCachedData()
      if (cachedBanks) {
        setBanks(validateBankData(cachedBanks))
        setDataSource('cache')
        setLoading(false)
        console.log(`✓ Datos cargados desde cache (${Math.round(cacheAge / (1000 * 60))} minutos de antigüedad)`)
      }

      // Intentar actualizar desde API primero
      try {
        console.log('Intentando actualizar desde API...')
        const apiResponse = await fetch('http://localhost:3000')
        if (apiResponse.ok) {
          const apiData = await apiResponse.json()
          const validatedData = validateBankData(apiData)
          
          // Actualizar UI y cache con los datos de la API
          setBanks(validatedData)
          setDataSource('api')
          setLoading(false)
          saveToCacheWithTimestamp(apiData)
          
          console.log('✓ Datos actualizados desde API y guardados en cache')
          return
        }
      } catch (apiError) {
        console.log('API no disponible, cargando desde JSON...')
      }

      // Si la API falla, actualizar desde JSON (fuente de verdad)
      try {
        console.log('Actualizando datos desde JSON...')
        const jsonResponse = await fetch('./data.json')
        if (!jsonResponse.ok) {
          throw new Error(`HTTP error! status: ${jsonResponse.status}`)
        }
        const jsonData = await jsonResponse.json()
        const validatedData = validateBankData(jsonData)
        
        // Actualizar UI y cache con los datos del JSON
        setBanks(validatedData)
        setDataSource('json')
        setLoading(false)
        saveToCacheWithTimestamp(jsonData)
        
        console.log('✓ Datos actualizados desde JSON y guardados en cache')
      } catch (jsonError) {
        console.error('✗ Error al cargar datos del JSON:', jsonError)
        // Si no hay cache y falla JSON, mostrar error
        if (!cachedBanks) {
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [getCachedData, isCacheValid, clearExpiredCache, cacheAge, saveToCacheWithTimestamp])

  // Efecto para filtrar bancos cuando cambia la búsqueda
  useEffect(() => {
    const filtered = filterBenefits(banks, searchTerm)
    setFilteredBanks(filtered)
  }, [banks, searchTerm])

  const selectBank = (bank: Bank) => {
    setComparisonState(prev => {
      if (prev.selectedBanks.find(b => b.id === bank.id)) {
        return {
          ...prev,
          selectedBanks: prev.selectedBanks.filter(b => b.id !== bank.id)
        }
      }

      if (prev.selectedBanks.length >= prev.maxSelection) {
        return prev
      }

      return {
        ...prev,
        selectedBanks: [...prev.selectedBanks, bank]
      }
    })
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAFA', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <header style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5'
      }}>
        <div style={{
          backgroundColor: '#E10A0A',
          height: '4px',
          width: '100%'
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#E10A0A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>V</div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1A1A1A',
                margin: 0,
                letterSpacing: '-0.5px'
              }}>
                Comparador de Beneficios
              </h1>
            </div>

            <div style={{
              padding: '8px 20px',
              backgroundColor: '#E10A0A',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '24px',
              letterSpacing: '0.5px'
            }}>
              Compara hasta 2 bancos
            </div>
          </div>

          {/* Buscador */}
          <div style={{ marginTop: '24px' }}>
            <SearchBar 
              onSearch={setSearchTerm}
              placeholder="Buscar beneficios por empresa, categoría o descripción..."
            />
          </div>

          {!loading && (
            <div style={{
              marginTop: '12px',
              fontSize: '12px',
              color: '#666666',
              fontStyle: 'italic'
            }}>
              Datos: <strong>
                {dataSource === 'api' ? '🔌 Desde API (localhost:3000)' :
                 dataSource === 'cache' ? `⚡ Desde cache (${Math.round(cacheAge / (1000 * 60))} min) - Actualizando...` : 
                 '📄 Desde JSON'}
              </strong>
              {searchTerm && (
                <span style={{ marginLeft: '16px', color: '#E10A0A' }}>
                  • {filteredBanks.reduce((total, bank) => total + bank.benefits.length, 0)} beneficios encontrados
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#1A1A1A',
            margin: '0 0 16px 0',
            letterSpacing: '-1px'
          }}>
            Productos sin tonterías
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#666666',
            margin: 0,
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.5'
          }}>
            Cuando se trata de banca, quieres un trato honesto sin sorpresas. Te mostraremos lo que necesitas saber desde el principio.
          </p>
        </div>

        <SelectedBanks
          selectedBanks={comparisonState.selectedBanks}
          maxSelection={comparisonState.maxSelection}
          onRemoveBank={selectBank}
        />

        {loading && (
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            color: '#666666'
          }}>
            <p style={{ fontSize: '18px' }}>Cargando datos bancarios...</p>
          </div>
        )}

        {!loading && filteredBanks.length === 0 && searchTerm && (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#666666'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h3>No se encontraron beneficios</h3>
            <p>Prueba con otros términos de búsqueda</p>
          </div>
        )}

        {!loading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
            marginTop: '24px'
          }}>
            {filteredBanks.map((bank) => (
              <BankCard
                key={bank.id}
                bank={bank}
                isSelected={!!comparisonState.selectedBanks.find(b => b.id === bank.id)}
                canSelect={comparisonState.selectedBanks.length < comparisonState.maxSelection}
                onSelect={selectBank}
                bankColors={bankColors}
              />
            ))}
          </div>
        )}

        {!loading && comparisonState.selectedBanks.length === 2 && (
          <ComparisonView
            banks={comparisonState.selectedBanks}
            bankColors={bankColors}
          />
        )}
      </main>

      <footer style={{
        backgroundColor: '#1A1A1A',
        color: 'white',
        padding: '48px 0',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{
            textAlign: 'center',
            paddingBottom: '32px',
            borderBottom: '1px solid #333333',
            marginBottom: '32px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#E10A0A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>V</div>
              <p style={{
                fontSize: '18px',
                margin: 0,
                fontWeight: '600'
              }}>
                Comparador de Beneficios Bancarios
              </p>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#999999',
              margin: 0
            }}>
              Compara beneficios bancarios de forma simple y transparente
            </p>
          </div>

          <div style={{
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '12px',
              color: '#666666',
              margin: 0,
              lineHeight: '1.6'
            }}>
              Virgin Money - Productos sin tonterías
              <br />
              Desarrollado con React & TypeScript • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
