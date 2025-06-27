import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import logo3D from '../assets/viewervalue-3d-logo.png'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={logo3D} 
              alt="ViewerValue 3D Logo" 
              className="h-24 w-24 mx-auto animate-float animate-pulse-glow"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Liquidity Pool</span>{' '}
            <span className="gradient-text">Investment</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            ViewerValue's attention tracking platform is live and operational. We're seeking strategic investors 
            to fund our VVT token liquidity pool and accelerate ecosystem growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/tiers">
              <Button size="lg" className="text-lg px-8 py-4">
                Investment Opportunities
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Request Pitch Deck
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$2.8T</div>
              <div className="text-sm text-muted-foreground">Global Digital Ad Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Live</div>
              <div className="text-sm text-muted-foreground">Platform Status</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$0.10</div>
              <div className="text-sm text-muted-foreground">VVT Token Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10%</div>
              <div className="text-sm text-muted-foreground">Platform Commission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Platform Ready</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ViewerValue's attention tracking technology is deployed and operational
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="tier-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Application</h3>
                <p className="text-muted-foreground">
                  Fully functional web platform for attention tracking and VVT token rewards. 
                  Users can monitor their attention value in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="tier-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Browser Extension</h3>
                <p className="text-muted-foreground">
                  Cross-browser extension deployed for seamless attention tracking across 
                  all web content and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="tier-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Token System</h3>
                <p className="text-muted-foreground">
                  VVT token infrastructure operational with blockchain integration. 
                  Ready for liquidity pool funding and ecosystem expansion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Liquidity Pool Investment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Platform is operational - now seeking capital to fund VVT token liquidity and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Investment Purpose</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">VVT Token Liquidity Pool</h4>
                    <p className="text-muted-foreground">Fund the initial liquidity pool to enable seamless token trading and rewards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">User Acquisition</h4>
                    <p className="text-muted-foreground">Marketing and incentives to onboard users to the attention tracking platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ecosystem Growth</h4>
                    <p className="text-muted-foreground">Scale operations and expand platform capabilities for enterprise adoption</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Now?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Platform proven and operational</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technology validated and deployed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Market timing optimal for attention economy solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ready to scale with proper liquidity backing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Fund the Future</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in scaling the world's first operational attention monetization platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tiers">
              <Button size="lg" className="text-lg px-8 py-4">
                View Investment Rounds
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Due Diligence
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

