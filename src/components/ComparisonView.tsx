import type { Bank } from '../types'
import { BenefitCard } from './BenefitCard'

interface ComparisonViewProps {
  banks: Bank[]
  bankColors: Record<string, { primary: string; secondary: string }>
}

export const ComparisonView = ({ banks, bankColors }: ComparisonViewProps) => {
  return (
    <div style={{
      marginTop: '48px',
      padding: '48px',
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #E5E5E5'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          marginBottom: '16px',
          color: '#1A1A1A',
          letterSpacing: '-1px'
        }}>
          Comparación Detallada
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#666666',
          margin: 0
        }}>
          Revisa y compara todos los beneficios lado a lado
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
        {banks.map(bank => (
          <div key={bank.id}>
            <div style={{
              borderTop: `6px solid ${bankColors[bank.id]?.primary || '#003DA5'}`,
              paddingTop: '24px',
              marginBottom: '24px'
            }}>
              <h3 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: bankColors[bank.id]?.primary || '#003DA5',
                margin: '0 0 12px 0',
                letterSpacing: '-0.5px'
              }}>
                {bank.name}
              </h3>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '32px',
              padding: '24px',
              backgroundColor: '#FAFAFA',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '15px', color: '#666666' }}>Total de Beneficios</span>
                <span style={{ fontWeight: '700', fontSize: '24px', color: bankColors[bank.id]?.primary || '#003DA5' }}>
                  {bank.benefits.length}
                </span>
              </div>
            </div>

            <div>
              <h4 style={{
                fontWeight: '700',
                marginBottom: '20px',
                fontSize: '20px',
                color: '#1A1A1A',
                letterSpacing: '-0.3px'
              }}>
                Todos los Beneficios
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {bank.benefits.map(benefit => (
                  <BenefitCard
                    key={benefit.id}
                    benefit={benefit}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}