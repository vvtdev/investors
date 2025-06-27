import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '../contexts/AuthContext'
import { useFunding } from '../contexts/FundingContext'

const Dashboard = () => {
  const { user } = useAuth()
  const { getTierById, calculateTokenValue } = useFunding()

  if (!user) {
    return <div>Please log in to view your dashboard</div>
  }

  const userTier = getTierById(user.tier)
  const tokenValue = calculateTokenValue()

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Track your ViewerValue investment and portfolio</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Investment Tier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userTier?.name || 'None'}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${user.investment || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">VVT Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(user.tokens || 0).toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Token Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${((user.tokens || 0) * tokenValue).toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {userTier && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {userTier.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Dashboard

