import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFunding } from '../contexts/FundingContext'
import { useAuth } from '../contexts/AuthContext'

const CheckoutPage = () => {
  const { tier } = useParams()
  const navigate = useNavigate()
  const { getTierById, processPayment } = useFunding()
  const { user, updateUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: user?.email || '',
    name: user?.name || '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  })

  const tierData = getTierById(tier)

  if (!tierData) {
    return <div>Tier not found</div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await processPayment(tierData, formData)
      
      if (result.success) {
        // Update user with investment
        if (user) {
          updateUser({
            tier: tierData.id,
            investment: tierData.price,
            tokens: tierData.tokens
          })
        }
        
        alert('Payment successful! Welcome to ViewerValue!')
        navigate('/dashboard')
      } else {
        alert('Payment failed: ' + result.error)
      }
    } catch (error) {
      alert('Payment error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card className="tier-card">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold">{tierData.name} Tier</h3>
                <div className="text-3xl font-bold text-primary mt-2">${tierData.price}</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>VVT Tokens:</span>
                  <span>{tierData.tokens.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Community Multiplier:</span>
                  <span>{tierData.multiplier}</span>
                </div>
                <div className="flex justify-between">
                  <span>Projected ROI:</span>
                  <span>{tierData.roi}</span>
                </div>
                <div className="flex justify-between">
                  <span>Laser-Engraved Card:</span>
                  <span>Included</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${tierData.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="tier-card">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="billingAddress">Billing Address</Label>
                  <Input
                    id="billingAddress"
                    placeholder="123 Main St, City, State, ZIP"
                    value={formData.billingAddress}
                    onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Complete Investment - $${tierData.price}`}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

