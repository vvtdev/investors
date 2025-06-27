import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useFunding } from '../contexts/FundingContext'

const TiersPage = () => {
  const { INVESTMENT_TIERS } = useFunding()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investment <span className="gradient-text">Tiers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your investment level and join the ViewerValue community. Each tier includes a laser-engraved metal card and VVT tokens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INVESTMENT_TIERS.map((tier) => (
            <Card key={tier.id} className={`tier-card tier-card-${tier.color} relative`}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  {tier.name} Tier
                </CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">${tier.price}</div>
                  <div className="text-sm text-muted-foreground">{tier.tokens.toLocaleString()} VVT Tokens</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {tier.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground">{tier.description}</p>
                
                <Link to={`/checkout/${tier.id}`} className="block">
                  <Button className="w-full">
                    Invest Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TiersPage

