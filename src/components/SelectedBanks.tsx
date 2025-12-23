import type { Bank } from '../types'

interface SelectedBanksProps {
  selectedBanks: Bank[]
  maxSelection: number
  onRemoveBank: (bank: Bank) => void
}

export const SelectedBanks = ({ selectedBanks, maxSelection, onRemoveBank }: SelectedBanksProps) => {
  if (selectedBanks.length === 0) {
    return null
  }

  return (
    <div style={{
      marginBottom: '40px',
      padding: '32px',
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #E5E5E5'
    }}>
      <h3 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#1A1A1A',
        letterSpacing: '-0.5px'
      }}>
        Seleccionados para Comparar <span style={{ color: '#E10A0A' }}>({selectedBanks.length}/{maxSelection})</span>
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {selectedBanks.map(bank => (
          <div key={bank.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            backgroundColor: '#FAFAFA',
            borderRadius: '12px',
            border: '2px solid #E10A0A'
          }}>
            <span style={{ fontWeight: '600', fontSize: '16px', color: '#1A1A1A' }}>{bank.name}</span>
            <button
              onClick={() => onRemoveBank(bank)}
              style={{
                color: '#E10A0A',
                fontWeight: '600',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'underline'
              }}
            >
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}