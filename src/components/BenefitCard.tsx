import type { BankBenefit } from '../types'

interface BenefitCardProps {
  benefit: BankBenefit
}

export const BenefitCard = ({ benefit }: BenefitCardProps) => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      border: '1px solid #E5E5E5',
      transition: 'all 0.2s'
    }}>
      <div style={{
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: '4px',
        fontSize: '16px'
      }}>
        {benefit.discount} - {benefit.company}
      </div>
      <div style={{
        fontSize: '13px',
        color: '#999999',
        marginBottom: '8px',
        fontWeight: '500'
      }}>
        {benefit.category}
      </div>
      <div style={{
        fontSize: '14px',
        color: '#666666',
        marginBottom: '12px',
        lineHeight: '1.5'
      }}>
        {benefit.description}
      </div>
      {benefit.valid_days && benefit.valid_days.length > 0 && (
        <div style={{
          fontSize: '12px',
          color: '#999999',
          marginBottom: '6px'
        }}>
          📅 Días válidos: {benefit.valid_days.join(', ')}
        </div>
      )}
      {benefit.valid_until && (
        <div style={{
          fontSize: '12px',
          color: '#999999',
          marginBottom: '6px'
        }}>
          📅 Válido hasta: {benefit.valid_until}
        </div>
      )}
      {benefit.requirements && (
        <div style={{
          fontSize: '12px',
          color: '#999999'
        }}>
          ⚠️ {benefit.requirements}
        </div>
      )}
    </div>
  )
}