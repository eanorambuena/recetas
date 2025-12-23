import { useState } from 'react'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
  placeholder?: string
}

export function SearchBar({ onSearch, placeholder = "Buscar beneficios..." }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '100%',
      margin: '0 auto'
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Ícono de búsqueda */}
        <svg 
          style={{
            position: 'absolute',
            left: '12px',
            width: '20px',
            height: '20px',
            color: '#666666',
            zIndex: 1
          }}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>

        {/* Input de búsqueda */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 48px 12px 44px',
            fontSize: '16px',
            border: '2px solid #e5e5e5',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            backgroundColor: '#ffffff'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#E10A0A'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e5e5e5'
          }}
        />

        {/* Botón para limpiar */}
        {searchTerm && (
          <button
            onClick={clearSearch}
            style={{
              position: 'absolute',
              right: '12px',
              width: '20px',
              height: '20px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666666',
              zIndex: 1
            }}
            title="Limpiar búsqueda"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {/* Indicador de resultados */}
      {searchTerm && (
        <div style={{
          marginTop: '8px',
          fontSize: '12px',
          color: '#666666',
          textAlign: 'center'
        }}>
          Buscando: <strong>"{searchTerm}"</strong>
        </div>
      )}
    </div>
  )
}