import { createContext, useContext, useState } from 'react'

const FundingContext = createContext()

export const useFunding = () => {
  const context = useContext(FundingContext)
  if (!context) {
    throw new Error('useFunding must be used within a FundingProvider')
  }
  return context
}

export const FundingProvider = ({ children }) => {
  const INVESTMENT_TIERS = [
    {
      id: 'gold',
      name: 'Gold',
      price: 5000,
      tokens: 50000,
      color: 'yellow',
      benefits: [
        'Founding member status',
        'Laser-engraved metal card',
        'Maximum community influence'
      ],
      description: 'Join the founding circle of the attention economy revolution'
    },
    {
      id: 'silver',
      name: 'Silver',
      price: 2500,
      tokens: 25000,
      color: 'gray',
      benefits: [
        'Pioneer member status',
        'Laser-engraved metal card',
        'Strong community voice'
      ],
      description: 'Be a pioneer in transforming content monetization'
    },
    {
      id: 'bronze',
      name: 'Bronze',
      price: 1000,
      tokens: 10000,
      color: 'orange',
      benefits: [
        'Early adopter status',
        'Laser-engraved metal card',
        'Community voting rights'
      ],
      description: 'Early access to the future of fair compensation'
    },
    {
      id: 'purple',
      name: 'Purple',
      price: 500,
      tokens: 5000,
      color: 'purple',
      benefits: [
        'Community member status',
        'Laser-engraved metal card',
        'Platform participation'
      ],
      description: 'Join the community building a fairer digital economy'
    },
    {
      id: 'blue',
      name: 'Blue',
      price: 250,
      tokens: 2500,
      color: 'blue',
      benefits: [
        'Supporter status',
        'Laser-engraved metal card',
        'Community membership'
      ],
      description: 'Support the revolution in viewer compensation'
    },
    {
      id: 'green',
      name: 'Green',
      price: 100,
      tokens: 1000,
      color: 'green',
      benefits: [
        'Entry member status',
        'Laser-engraved metal card',
        'Community access'
      ],
      description: 'Start your journey in the new attention economy'
    }
  ]

  const [investments, setInvestments] = useState([])

  const addInvestment = (investment) => {
    setInvestments(prev => [...prev, { ...investment, id: Date.now() }])
  }

  const value = {
    INVESTMENT_TIERS,
    investments,
    addInvestment
  }

  return (
    <FundingContext.Provider value={value}>
      {children}
    </FundingContext.Provider>
  )
}

export default FundingContext

