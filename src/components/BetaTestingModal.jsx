import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Users, CheckCircle, Smartphone, Globe, Star, Gift } from 'lucide-react'

export function BetaTestingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platforms: [],
    devices: [],
    experience: '',
    motivation: '',
    availability: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const platforms = [
    { id: 'facebook', label: 'Facebook' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'fanbase', label: 'Fanbase' }
  ]

  const devices = [
    { id: 'desktop', label: 'Desktop/Laptop' },
    { id: 'mobile', label: 'Mobile Phone' },
    { id: 'tablet', label: 'Tablet' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  const isFormValid = formData.name && formData.email && formData.platforms.length > 0 && formData.devices.length > 0

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white text-xl flex items-center space-x-2">
            <Users className="h-6 w-6 text-green-400" />
            <span>Join ViewerValue Beta Testing Program</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Help us validate our platform and earn exclusive rewards as a beta tester
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="space-y-6 py-6">
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Application Submitted Successfully!</h3>
              <p className="text-gray-300">
                Thank you for your interest in beta testing ViewerValue. We'll review your application 
                and send you beta access instructions within 48 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-green-400 text-green-400">
                  <Gift className="h-3 w-3 mr-1" />
                  Free VVT Tokens
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-400">
                  <Star className="h-3 w-3 mr-1" />
                  Exclusive NFT Badge
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-400">
                  <Users className="h-3 w-3 mr-1" />
                  Early Access
                </Badge>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-white">What Happens Next:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• We'll review your application within 48 hours</li>
                <li>• Selected beta testers will receive download links</li>
                <li>• You'll get access to both browser extension and mobile app</li>
                <li>• Start earning VVT tokens immediately upon testing</li>
                <li>• Provide feedback through our dedicated beta channel</li>
              </ul>
            </div>
            <Button 
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Beta Program Benefits */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Beta Tester Benefits</CardTitle>
                <CardDescription className="text-gray-300">
                  Exclusive rewards for early participants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Gift className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-white">Free VVT tokens for participation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-white">Exclusive beta tester NFT badge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-white">Direct feedback channel to founders</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-white">Early access to all features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-white">Lifetime premium features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-white">Beta tester community access</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Personal Information</CardTitle>
                <CardDescription className="text-gray-300">
                  Basic contact information for beta access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="beta-name" className="text-white">Full Name *</Label>
                    <Input
                      id="beta-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="beta-email" className="text-white">Email Address *</Label>
                    <Input
                      id="beta-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="beta-phone" className="text-white">Phone Number (Optional)</Label>
                  <Input
                    id="beta-phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Platform Usage */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Platform Usage</CardTitle>
                <CardDescription className="text-gray-300">
                  Which social media platforms do you actively use? *
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((platform) => (
                    <div key={platform.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={platform.id}
                        checked={formData.platforms.includes(platform.id)}
                        onCheckedChange={(checked) => handleCheckboxChange('platforms', platform.id, checked)}
                        className="border-slate-600"
                      />
                      <Label htmlFor={platform.id} className="text-white text-sm">
                        {platform.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Device Types */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Device Types</CardTitle>
                <CardDescription className="text-gray-300">
                  Which devices will you use for testing? *
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {devices.map((device) => (
                    <div key={device.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={device.id}
                        checked={formData.devices.includes(device.id)}
                        onCheckedChange={(checked) => handleCheckboxChange('devices', device.id, checked)}
                        className="border-slate-600"
                      />
                      <Label htmlFor={device.id} className="text-white text-sm">
                        {device.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Additional Information</CardTitle>
                <CardDescription className="text-gray-300">
                  Help us understand your background and availability
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white">
                    Previous Beta Testing Experience (Optional)
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Describe any previous beta testing experience..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-white">
                    Why do you want to join our beta program? (Optional)
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Tell us what interests you about ViewerValue..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-white">
                    Testing Availability (Optional)
                  </Label>
                  <Input
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="e.g., 2-3 hours per week, weekends only, etc."
                  />
                </div>
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
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Submit Beta Application'
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

