import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '../contexts/AuthContext'
import { useFunding } from '../contexts/FundingContext'

const AdminPanel = () => {
  const { user, isAdmin } = useAuth()
  const { fundingStats, INVESTMENT_TIERS } = useFunding()

  if (!isAdmin) {
    return <div>Access denied. Admin privileges required.</div>
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">ViewerValue funding management and analytics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Raised</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                ${fundingStats.totalRaised.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Goal Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">
                {fundingStats.percentComplete.toFixed(1)}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Investors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">
                {fundingStats.totalInvestors}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Remaining Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">
                ${(fundingStats.goalAmount - fundingStats.totalRaised).toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Investment Tier Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INVESTMENT_TIERS.map((tier) => (
                <div key={tier.id} className="p-4 border rounded-lg">
                  <div className="font-semibold">{tier.name} Tier</div>
                  <div className="text-sm text-muted-foreground">${tier.price}</div>
                  <div className="text-sm">{tier.tokens.toLocaleString()} VVT</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminPanel

