import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Eye, DollarSign, Smartphone, Globe, Code, Users, Target, TrendingUp, CheckCircle, AlertCircle, Menu, X } from 'lucide-react'
import { PaymentModal } from '@/components/PaymentModal.jsx'
import { BetaTestingModal } from '@/components/BetaTestingModal.jsx'
import viewerValueLogo from './assets/viewervalue-logo.png'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [betaTestingModalOpen, setBetaTestingModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const investmentTiers = [
    {
      title: 'Strategic Partner',
      amount: 5000,
      tokens: 50000,
      benefits: [
        '50,000 VVT tokens',
        'Founding member status',
        'Platform governance rights',
        'Direct founder access',
        'Revenue sharing participation'
      ]
    },
    {
      title: 'Growth Investor',
      amount: 1000,
      tokens: 10000,
      benefits: [
        '10,000 VVT tokens',
        'Early adopter status',
        'Platform beta access',
        'Community voting rights',
        'Quarterly updates'
      ]
    },
    {
      title: 'Community Supporter',
      amount: 100,
      tokens: 1000,
      benefits: [
        '1,000 VVT tokens',
        'Community member status',
        'Platform early access',
        'Community participation',
        'Regular updates'
      ]
    }
  ]

  const handleInvestmentClick = (tier) => {
    setSelectedTier(tier)
    setPaymentModalOpen(true)
  }

  const handleBetaTestingClick = () => {
    setBetaTestingModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={viewerValueLogo} 
                alt="ViewerValue Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-white">ViewerValue</h1>
                <p className="text-sm text-gray-400">Technologies LLC</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`text-sm font-medium transition-colors ${activeTab === 'overview' ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => window.location.href = 'https://invest.viewervalue.net'}
                className={`text-sm font-medium transition-colors text-gray-300 hover:text-white`}
              >
                Pre-Sale
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col space-y-2 pt-4">
                <button 
                  onClick={() => {
                    setActiveTab('overview')
                    setMobileMenuOpen(false)
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeTab === 'overview' 
                      ? 'text-purple-400 bg-purple-400/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => {
                    window.location.href = 'https://invest.viewervalue.net'
                    setMobileMenuOpen(false)
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors rounded-lg text-gray-300 hover:text-white hover:bg-white/5`}
                >
                  Pre-Sale
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="border-purple-400 text-purple-400">
                  Prototype Stage - Seeking Deployment Funding
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Monetizing the
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Attention Economy</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  ViewerValue has developed working prototypes that track user attention on social media platforms and reward viewers with VVT tokens. We're seeking investment to deploy and scale our proven concept.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">$0.10</div>
                  <div className="text-sm text-gray-400">Initial Token Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">5</div>
                  <div className="text-sm text-gray-400">Platforms Supported</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">Prototype</div>
                  <div className="text-sm text-gray-400">Development Status</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">$50M+</div>
                  <div className="text-sm text-gray-400">Market Cap Potential</div>
                </div>
              </div>
            </section>

            {/* Current Status */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Current Development Status</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Globe className="h-5 w-5 text-blue-400" />
                      <span>Browser Extension</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Functional prototype ready for deployment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Tracks attention on 5 platforms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Token reward calculation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Awaiting Chrome Web Store submission</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Smartphone className="h-5 w-5 text-green-400" />
                      <span>Mobile App</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      React Native framework completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">User authentication system</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Attention tracking service</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Awaiting app store submission</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Code className="h-5 w-5 text-purple-400" />
                      <span>Smart Contracts</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      VVT token system developed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">ERC20 token contract</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Revenue distribution model</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Awaiting blockchain deployment</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How It Works */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">How ViewerValue Works</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">1. Attention Tracking</h3>
                  <p className="text-gray-300">
                    Our browser extension and mobile app monitor time spent viewing content on Facebook, TikTok, Instagram, YouTube, and Fanbase. The technology tracks active attention, not just passive browsing.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">2. Token Rewards</h3>
                  <p className="text-gray-300">
                    Users earn VVT tokens based on their attention time. The initial token value is $0.10, with the potential to grow as the platform scales and gains adoption.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">3. Revenue Model</h3>
                  <p className="text-gray-300">
                    The platform operates on a sustainable revenue model where a portion of token transactions supports platform operations and growth, while the majority rewards users.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">4. Ecosystem Growth</h3>
                  <p className="text-gray-300">
                    As more users join and platforms integrate, the value of attention data increases, creating a positive feedback loop that benefits all participants in the ecosystem.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="space-y-12">
            <section className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Proven Technology Stack
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ViewerValue's technology has been developed and tested. Our prototypes demonstrate the technical feasibility of attention tracking and token distribution.
              </p>
            </section>

            {/* Technical Architecture */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Technical Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Browser Extension</CardTitle>
                    <CardDescription className="text-gray-300">
                      Cross-platform attention tracking
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Supported Platforms:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Facebook - Timeline and video tracking</li>
                        <li>• TikTok - Video engagement monitoring</li>
                        <li>• Instagram - Story and post attention</li>
                        <li>• YouTube - Video watch time tracking</li>
                        <li>• Fanbase - Content engagement metrics</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Real-time attention monitoring</li>
                        <li>• Privacy-focused data collection</li>
                        <li>• Automatic token calculation</li>
                        <li>• User dashboard and controls</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Mobile Application</CardTitle>
                    <CardDescription className="text-gray-300">
                      React Native cross-platform app
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Core Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• User authentication and profiles</li>
                        <li>• VVT token balance tracking</li>
                        <li>• Withdrawal and exchange system</li>
                        <li>• Referral program integration</li>
                        <li>• Attention analytics dashboard</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Technical Stack:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• React Native framework</li>
                        <li>• Cross-platform compatibility</li>
                        <li>• Secure token storage</li>
                        <li>• Real-time data synchronization</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Blockchain Integration</CardTitle>
                    <CardDescription className="text-gray-300">
                      Multi-chain VVT token system
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Smart Contracts:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• ERC20 compliant VVT token</li>
                        <li>• Automated revenue distribution</li>
                        <li>• Tier-based reward multipliers</li>
                        <li>• Secure token minting and burning</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Supported Networks:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Ethereum mainnet</li>
                        <li>• Binance Smart Chain</li>
                        <li>• Polygon network</li>
                        <li>• Testnet deployments ready</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Revenue Distribution</CardTitle>
                    <CardDescription className="text-gray-300">
                      Automated and transparent
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Distribution Model:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• 60% - User rewards</li>
                        <li>• 20% - Platform operations</li>
                        <li>• 15% - Infrastructure costs</li>
                        <li>• 5% - Growth and development</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-400">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Automated smart contract execution</li>
                        <li>• Transparent on-chain tracking</li>
                        <li>• Real-time distribution</li>
                        <li>• Audit-ready transaction logs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'investment' && (
          <div className="space-y-12">
            <section className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Investment Opportunity
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ViewerValue has completed the development phase and built working prototypes. We're now seeking investment to deploy our technology and scale the platform.
              </p>
            </section>

            {/* What We're Funding */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">What Your Investment Funds</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Target className="h-5 w-5 text-green-400" />
                      <span>Platform Deployment</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Chrome Web Store submission and approval</li>
                      <li>• Apple App Store and Google Play deployment</li>
                      <li>• Smart contract deployment to mainnet</li>
                      <li>• Production server infrastructure</li>
                      <li>• SSL certificates and security audits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Users className="h-5 w-5 text-blue-400" />
                      <span>User Acquisition</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Digital marketing campaigns</li>
                      <li>• Influencer partnerships</li>
                      <li>• User onboarding incentives</li>
                      <li>• Community building initiatives</li>
                      <li>• Educational content creation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <TrendingUp className="h-5 w-5 text-purple-400" />
                      <span>Token Liquidity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Initial VVT token liquidity pool</li>
                      <li>• Exchange listing preparations</li>
                      <li>• Market maker partnerships</li>
                      <li>• Token distribution infrastructure</li>
                      <li>• Reward pool funding</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Code className="h-5 w-5 text-yellow-400" />
                      <span>Operations & Legal</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Legal compliance and registration</li>
                      <li>• Copyright and intellectual property</li>
                      <li>• Customer support infrastructure</li>
                      <li>• Payment processing integration</li>
                      <li>• Ongoing development and maintenance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Investment Tiers */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Investment Tiers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-400/30">
                  <CardHeader>
                    <CardTitle className="text-center text-white">Strategic Partner</CardTitle>
                    <CardDescription className="text-center text-yellow-200">$5,000</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>• 50,000 VVT tokens</li>
                      <li>• Founding member status</li>
                      <li>• Platform governance rights</li>
                      <li>• Direct founder access</li>
                      <li>• Revenue sharing participation</li>
                    </ul>
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      onClick={() => handleInvestmentClick(investmentTiers[0])}
                    >
                      Invest $5,000 (BTC/ETH Accepted)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/30">
                  <CardHeader>
                    <CardTitle className="text-center text-white">Growth Investor</CardTitle>
                    <CardDescription className="text-center text-blue-200">$1,000</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>• 10,000 VVT tokens</li>
                      <li>• Early adopter status</li>
                      <li>• Platform beta access</li>
                      <li>• Community voting rights</li>
                      <li>• Quarterly updates</li>
                    </ul>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => handleInvestmentClick(investmentTiers[1])}
                    >
                      Invest $1,000 (BTC/ETH Accepted)
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/30">
                  <CardHeader>
                    <CardTitle className="text-center text-white">Community Supporter</CardTitle>
                    <CardDescription className="text-center text-green-200">$100</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>• 1,000 VVT tokens</li>
                      <li>• Community member status</li>
                      <li>• Platform early access</li>
                      <li>• Community participation</li>
                      <li>• Regular updates</li>
                    </ul>
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => handleInvestmentClick(investmentTiers[2])}
                    >
                      Invest $100 (BTC/ETH Accepted)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Payment Methods */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Accepted Payment Methods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <DollarSign className="h-5 w-5 text-green-400" />
                      <span>Traditional Payments</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Credit/Debit Cards (Visa, Mastercard)</li>
                      <li>• PayPal</li>
                      <li>• Bank Wire Transfer</li>
                      <li>• ACH Transfer</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-400/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Code className="h-5 w-5 text-orange-400" />
                      <span>Bitcoin (BTC)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Secure Bitcoin wallet integration</li>
                      <li>• Real-time BTC to USD conversion</li>
                      <li>• Multi-signature security</li>
                      <li>• Instant transaction confirmation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Code className="h-5 w-5 text-blue-400" />
                      <span>Ethereum (ETH)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• Smart contract integration</li>
                      <li>• Gas-optimized transactions</li>
                      <li>• ERC-20 token compatibility</li>
                      <li>• Automated escrow system</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Security & Data Collection */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Security & Data Protection</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>Transaction Security</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Cryptocurrency Security:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Multi-signature wallet protection</li>
                          <li>• Hardware security module (HSM) integration</li>
                          <li>• Cold storage for large amounts</li>
                          <li>• Real-time fraud detection</li>
                          <li>• Blockchain transaction verification</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Traditional Payment Security:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• PCI DSS Level 1 compliance</li>
                          <li>• SSL/TLS encryption</li>
                          <li>• Tokenized payment processing</li>
                          <li>• 3D Secure authentication</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Eye className="h-5 w-5 text-blue-400" />
                      <span>Data Collection & Privacy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">What We Collect:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Attention time on supported platforms</li>
                          <li>• Platform engagement metrics</li>
                          <li>• User preferences and settings</li>
                          <li>• Transaction history (anonymized)</li>
                          <li>• Device and browser information</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Privacy Protection:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• End-to-end encryption</li>
                          <li>• GDPR and CCPA compliant</li>
                          <li>• No personal content access</li>
                          <li>• User-controlled data sharing</li>
                          <li>• Regular security audits</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Timeline */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Deployment Timeline</h2>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Phase 1: Platform Launch (Months 1-3)</h3>
                  <p className="text-gray-300">Deploy browser extension and mobile apps to respective stores. Launch smart contracts on mainnet. Begin user onboarding.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Phase 2: User Growth (Months 4-6)</h3>
                  <p className="text-gray-300">Execute marketing campaigns. Build user base to 10,000+ active users. Establish token liquidity and exchange partnerships.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Phase 3: Scale & Expand (Months 7-12)</h3>
                  <p className="text-gray-300">Scale to 100,000+ users. Add new platform integrations. Develop enterprise partnerships. Achieve sustainable revenue.</p>
                </div>
              </div>
            </section>

            {/* Beta Testing Program */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">Beta Testing Program</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <Users className="h-5 w-5 text-green-400" />
                      <span>Join Our Beta Test</span>
                    </CardTitle>
                    <CardDescription className="text-green-200">
                      Help us validate the platform and earn early rewards
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-400">Beta Tester Benefits:</h4>
                      <ul className="text-sm text-gray-200 space-y-1">
                        <li>• Free VVT tokens for participation</li>
                        <li>• Early access to all features</li>
                        <li>• Direct feedback channel to founders</li>
                        <li>• Beta tester exclusive NFT badge</li>
                        <li>• Lifetime premium features</li>
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={handleBetaTestingClick}
                    >
                      Apply for Beta Testing
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-white">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                      <span>Beta Results & Feedback</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Real user data and testimonials
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-purple-400">What We'll Track:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Average attention time per platform</li>
                        <li>• Token earning rates and user satisfaction</li>
                        <li>• Platform accuracy and reliability metrics</li>
                        <li>• User engagement and retention rates</li>
                        <li>• Technical performance and bug reports</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-purple-400">Results Publication:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Weekly beta testing reports</li>
                        <li>• User testimonials and case studies</li>
                        <li>• Performance metrics dashboard</li>
                        <li>• Transparent feedback integration</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src={viewerValueLogo} 
                alt="ViewerValue Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-semibold text-white">ViewerValue Technologies LLC</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Revolutionizing the attention economy through fair compensation and blockchain technology. 
              Join us in building the future of content monetization.
            </p>
            <div className="space-y-2">
              <p className="text-purple-400 font-medium">
                Contact: <a href="mailto:founder@viewervalue.net" className="hover:text-purple-300 underline">founder@viewervalue.net</a>
              </p>
              <p className="text-sm text-gray-400">
                For investment inquiries, partnership opportunities, or general questions
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <p>© 2025 ViewerValue Technologies LLC. All rights reserved.</p>
              <p className="mt-2">
                Investment involves risk. This platform is in development stage. 
                Please read our investment disclaimer carefully.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PaymentModal 
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        tier={selectedTier}
      />
      <BetaTestingModal 
        isOpen={betaTestingModalOpen}
        onClose={() => setBetaTestingModalOpen(false)}
      />
    </div>
  )
}

export default App

