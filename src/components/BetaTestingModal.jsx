import React, { useState } from 'react';

const BetaTestingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platforms: [],
    devices: [],
    experience: '',
    motivation: '',
    availability: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [errors, setErrors] = useState({});

  const platforms = [
    { id: 'facebook', label: 'Facebook' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'fanbase', label: 'Fanbase' }
  ];

  const devices = [
    { id: 'desktop', label: 'Desktop/Laptop' },
    { id: 'mobile', label: 'Mobile Phone' },
    { id: 'tablet', label: 'Tablet' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.platforms.length === 0) {
      newErrors.platforms = 'Please select at least one platform';
    }
    
    if (formData.devices.length === 0) {
      newErrors.devices = 'Please select at least one device type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/.netlify/functions/beta-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setApplicationId(result.applicationId);
        setIsSuccess(true);
      } else {
        throw new Error(result.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Beta application error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      platforms: [],
      devices: [],
      experience: '',
      motivation: '',
      availability: ''
    });
    setIsSuccess(false);
    setApplicationId('');
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>👥</span>
                <span>Join ViewerValue Beta Testing</span>
              </h2>
              <p className="text-purple-100 mt-1">Help validate our platform and earn exclusive rewards</p>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          {isSuccess ? (
            /* Success State */
            <div className="space-y-6 py-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Application Submitted Successfully!</h3>
                <p className="text-gray-300">
                  Thank you for your interest in beta testing ViewerValue. We'll review your application 
                  and send you beta access instructions within 48 hours.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Application ID:</strong> {applicationId}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Save this ID for your records. Check your email for confirmation details.
                  </p>
                </div>
              </div>

              {/* Beta Benefits */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30">
                <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <span>🎁</span>
                  <span>Your Beta Tester Benefits</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">🪙</span>
                      <span className="text-white">Free VVT tokens (2x multiplier)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">🏆</span>
                      <span className="text-white">Exclusive beta tester NFT badge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">⚡</span>
                      <span className="text-white">Early access to all features</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">💬</span>
                      <span className="text-white">Direct founder feedback channel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-400">🌟</span>
                      <span className="text-white">Lifetime premium features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400">👥</span>
                      <span className="text-white">Beta community access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="font-semibold text-white mb-3">📅 What Happens Next:</h4>
                <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                  <li>We'll review your application within 48 hours</li>
                  <li>Selected beta testers will receive download links via email</li>
                  <li>You'll get access to both browser extension and mobile app</li>
                  <li>Start earning VVT tokens immediately upon testing</li>
                  <li>Provide feedback through our dedicated beta Discord channel</li>
                </ol>
              </div>

              <button 
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            /* Application Form */
            <div className="space-y-6">
              {/* Beta Program Benefits */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-4">🎁 Beta Tester Benefits</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">🪙</span>
                      <span className="text-white">Free VVT tokens for participation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">🏆</span>
                      <span className="text-white">Exclusive beta tester NFT badge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">👥</span>
                      <span className="text-white">Direct feedback channel to founders</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-white">Early access to all features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white">Lifetime premium features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">👥</span>
                      <span className="text-white">Beta tester community access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">👤 Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Platform Usage */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">📱 Platform Usage</h3>
                <p className="text-gray-400 text-sm mb-4">Which social media platforms do you actively use? *</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {platforms.map((platform) => (
                    <label key={platform.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.platforms.includes(platform.id)}
                        onChange={(e) => handleCheckboxChange('platforms', platform.id, e.target.checked)}
                        className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <span className="text-white text-sm">{platform.label}</span>
                    </label>
                  ))}
                </div>
                {errors.platforms && <p className="text-red-400 text-xs mt-2">{errors.platforms}</p>}
              </div>

              {/* Device Types */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">💻 Device Types</h3>
                <p className="text-gray-400 text-sm mb-4">Which devices will you use for testing? *</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {devices.map((device) => (
                    <label key={device.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.devices.includes(device.id)}
                        onChange={(e) => handleCheckboxChange('devices', device.id, e.target.checked)}
                        className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <span className="text-white text-sm">{device.label}</span>
                    </label>
                  ))}
                </div>
                {errors.devices && <p className="text-red-400 text-xs mt-2">{errors.devices}</p>}
              </div>

              {/* Additional Information */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">📝 Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Previous Beta Testing Experience (Optional)
                    </label>
                    <textarea
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="Describe any previous beta testing experience..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Why do you want to join our beta program? (Optional)
                    </label>
                    <textarea
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="Tell us what interests you about ViewerValue..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Testing Availability (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.availability}
                      onChange={(e) => handleInputChange('availability', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="e.g., 2-3 hours per week, weekends only, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit Beta Application'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetaTestingModal;

