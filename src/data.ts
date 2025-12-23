import { type Bank } from './types'

export const mockBanks: Bank[] = [
  {
    id: 'virgin-money',
    name: 'Virgin Money',
    benefits: [
      {
        id: 'vm-starbucks',
        company: 'Starbucks',
        discount: '20% off',
        description: 'Get 20% discount on all Starbucks purchases every Tuesday',
        category: 'Restaurantes',
        valid_until: '2025-12-31',
        valid_days: ['Martes'],
        requirements: 'Pago con tarjeta Virgin Money'
      },
      {
        id: 'vm-cinema',
        company: 'Odeon, Vue, Cineworld',
        discount: '2x1 en entradas',
        description: 'Buy one cinema ticket, get one free at participating cinemas',
        category: 'Entretenimiento',
        valid_until: '2025-12-31',
        valid_days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        requirements: 'Compra con tarjeta Virgin Money'
      }
    ]
  },
  {
    id: 'hsbc',
    name: 'HSBC UK',
    benefits: [
      {
        id: 'hsbc-fuel',
        company: 'Shell',
        discount: '5p por litro',
        description: 'Save 5p per litre at Shell petrol stations',
        category: 'Combustible',
        valid_until: '2025-12-31',
        valid_days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        requirements: 'Pago con tarjeta HSBC'
      }
    ]
  },
  {
    id: 'santander',
    name: 'Santander UK',
    benefits: [
      {
        id: 'sant-railcard',
        company: 'National Rail',
        discount: 'Railcard gratis',
        description: 'Get a free 16-25 or 26-30 Railcard worth £30',
        category: 'Transporte',
        valid_until: '2025-12-31',
        valid_days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        requirements: 'Cliente Santander activo'
      }
    ]
  }
]
