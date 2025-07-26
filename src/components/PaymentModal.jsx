import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CreditCard, Bitcoin, Wallet, Mail, CheckCircle, ExternalLink } from 'lucide-react'

export function PaymentModal({ isOpen, onClose, tier }) {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  const getPaymentInstructions = () => {
    switch (paymentMethod) {
      case 'crypto':
        return {
          title: 'Cryptocurrency Payment',
          description: 'Send your payment to one of the following addresses:',
          details: [
            { label: 'Bitcoin (BTC)', value: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', icon: Bitcoin },
            { label: 'Ethereum (ETH)', value: '0x742d35Cc6634C0532925a3b8D4C0d886E4C8b3E4', icon: Wallet }
          ]
        }
      case 'stripe':
        return {
          title: 'Credit Card / Bank Transfer',
          description: 'Complete your payment securely through Stripe:',
          details: [
            { label: 'Secure Payment', value: 'Redirecting to Stripe Checkout...', icon: CreditCard }
          ]
        }
      case 'wefunder':
        return {
          title: 'Equity Investment Platform',
          description: 'Invest through our verified equity crowdfunding campaign:',
          details: [
            { label: 'Wefunder Campaign', value: 'Visit our official campaign page', icon: ExternalLink }
          ]
        }
      default:
        return null
    }
  }

  if (!tier) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">
            {tier.title} Investment - ${tier.amount.toLocaleString()}
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Complete your investment in ViewerValue Technologies LLC
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="space-y-6 py-6">
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Payment Instructions Sent!</h3>
              <p className="text-gray-300">
                We've sent detailed payment instructions to your email address. 
                Please follow the instructions to complete your investment.
              </p>
              <Badge variant="outline" className="border-green-400 text-green-400">
                Investment Tier: {tier.title}
              </Badge>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-white">Next Steps:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Check your email for payment instructions</li>
                <li>• Complete payment within 48 hours to secure your tier</li>
                <li>• You'll receive investment confirmation and VVT tokens</li>
                <li>• Welcome to the ViewerValue investor community!</li>
              </ul>
            </div>
            <Button 
              onClick={onClose}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Investment Summary */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Investment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Investment Tier:</span>
                  <span className="text-white font-semibold">{tier.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Investment Amount:</span>
                  <span className="text-white font-semibold">${tier.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">VVT Tokens:</span>
                  <span className="text-white font-semibold">{tier.tokens.toLocaleString()} VVT</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-300">
                  Required for investment processing and communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Payment Method</CardTitle>
                <CardDescription className="text-gray-300">
                  Choose your preferred payment method
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="crypto" className="text-white">
                      <div className="flex items-center space-x-2">
                        <Bitcoin className="h-4 w-4" />
                        <span>Cryptocurrency (BTC/ETH)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="stripe" className="text-white">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4" />
                        <span>Credit Card / Bank Transfer</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="wefunder" className="text-white">
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>Equity Platform (Wefunder)</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                {paymentMethod && (
                  <Card className="bg-slate-700 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-white text-sm">
                        {getPaymentInstructions()?.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm">
                        {getPaymentInstructions()?.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {getPaymentInstructions()?.details.map((detail, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-slate-600 rounded-lg">
                          <detail.icon className="h-5 w-5 text-purple-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">{detail.label}</div>
                            <div className="text-xs text-gray-300 font-mono">{detail.value}</div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1 border-slate-600 text-white hover:bg-slate-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePayment}
                disabled={!formData.name || !formData.email || !paymentMethod || isProcessing}
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Send Payment Instructions'
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

