export interface BankBenefit {
  id: string
  company: string
  discount: string
  category: string
  description: string
  valid_until: string
  valid_days: string[]
  requirements: string
}

export interface Bank {
  id: string
  name: string
  benefits: BankBenefit[]
}

export interface ComparisonState {
  selectedBanks: Bank[]
  maxSelection: number
}
