import type { Bank } from '../types'

interface BankCardProps {
  bank: Bank
  isSelected: boolean
  canSelect: boolean
  onSelect: (bank: Bank) => void
  bankColors: Record<string, { primary: string; secondary: string }>
}

export const BankCard = ({ bank, isSelected, canSelect, onSelect, bankColors }: BankCardProps) => {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      boxShadow: isSelected
        ? '0 8px 24px rgba(225, 10, 10, 0.2)'
        : '0 2px 8px rgba(0,0,0,0.08)',
      padding: '0',
      border: isSelected
        ? '3px solid #E10A0A'
        : '1px solid #E5E5E5',
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    }}>
      <div style={{
        backgroundColor: bankColors[bank.id]?.primary || '#003DA5',
        height: '8px',
        width: '100%'
      }} />

      <div style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: '0 0 8px 0',
              letterSpacing: '-0.5px'
            }}>
              {bank.name}
            </h3>
          </div>
          <div style={{
            textAlign: 'center',
            marginLeft: '20px',
            minWidth: '80px'
          }}>
            <div style={{
              fontSize: '40px',
              fontWeight: '700',
              color: bankColors[bank.id]?.primary || '#003DA5',
              lineHeight: '1'
            }}>
              {bank.benefits.length}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#999999',
              marginTop: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              beneficios
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{
            fontWeight: '600',
            color: '#1A1A1A',
            margin: '0 0 16px 0',
            fontSize: '16px',
            letterSpacing: '-0.3px'
          }}>
            Beneficios Destacados
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {bank.benefits.slice(0, 2).map(benefit => (
              <div key={benefit.id} style={{
                paddingLeft: '16px',
                borderLeft: `3px solid ${bankColors[bank.id]?.primary || '#003DA5'}`
              }}>
                <div style={{
                  fontWeight: '600',
                  color: '#1A1A1A',
                  fontSize: '15px',
                  marginBottom: '4px'
                }}>
                  {benefit.discount} - {benefit.company}
                </div>
                <div style={{
                  color: '#666666',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onSelect(bank)}
          disabled={!isSelected && !canSelect}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '16px',
            border: 'none',
            cursor: (!isSelected && !canSelect) ? 'not-allowed' : 'pointer',
            backgroundColor: isSelected
              ? '#1A1A1A'
              : (!isSelected && !canSelect)
              ? '#E5E5E5'
              : '#E10A0A',
            color: (!isSelected && !canSelect) ? '#999999' : 'white',
            transition: 'all 0.2s',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => {
            if (isSelected || canSelect) {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {isSelected ? '✓ Seleccionado' : 'Agregar a Comparación'}
        </button>
      </div>
    </div>
  )
}