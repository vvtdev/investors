// Netlify Function: /.netlify/functions/beta-application.js
// Handles beta testing application submissions

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'platforms', 'devices'];
    for (const field of requiredFields) {
      if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: `Missing required field: ${field}` })
        };
      }
    }

    // Generate unique beta application ID
    const applicationId = `BETA_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email to admin (ViewerValue team)
    const adminEmailContent = `
      <h2>🚀 New Beta Testing Application</h2>
      <p><strong>Application ID:</strong> ${applicationId}</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      
      <h3>👤 Applicant Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
      </ul>
      
      <h3>📱 Platform Usage:</h3>
      <ul>
        ${data.platforms.map(platform => `<li>${platform.charAt(0).toUpperCase() + platform.slice(1)}</li>`).join('')}
      </ul>
      
      <h3>💻 Device Types:</h3>
      <ul>
        ${data.devices.map(device => `<li>${device.charAt(0).toUpperCase() + device.slice(1)}</li>`).join('')}
      </ul>
      
      <h3>📝 Additional Information:</h3>
      <p><strong>Previous Experience:</strong> ${data.experience || 'None provided'}</p>
      <p><strong>Motivation:</strong> ${data.motivation || 'None provided'}</p>
      <p><strong>Availability:</strong> ${data.availability || 'Not specified'}</p>
      
      <hr>
      <p><em>Review this application and send beta access instructions if approved.</em></p>
    `;

    // Email to applicant (confirmation)
    const applicantEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B5CF6;">🎉 Beta Application Received!</h2>
        
        <p>Hi ${data.name},</p>
        
        <p>Thank you for applying to join the ViewerValue Beta Testing Program! We're excited about your interest in helping us validate our attention monetization platform.</p>
        
        <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">📋 Application Summary:</h3>
          <p><strong>Application ID:</strong> ${applicationId}</p>
          <p><strong>Platforms:</strong> ${data.platforms.join(', ')}</p>
          <p><strong>Devices:</strong> ${data.devices.join(', ')}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <h3 style="color: #059669;">🎁 What You'll Get as a Beta Tester:</h3>
        <ul>
          <li>🪙 <strong>Free VVT Tokens:</strong> Earn tokens during testing with 2x multiplier</li>
          <li>🏆 <strong>Exclusive NFT Badge:</strong> Limited edition beta tester recognition</li>
          <li>⚡ <strong>Early Access:</strong> First to try all new features</li>
          <li>💬 <strong>Direct Feedback Channel:</strong> Communicate directly with founders</li>
          <li>🌟 <strong>Lifetime Premium:</strong> Keep premium features after launch</li>
        </ul>
        
        <h3 style="color: #7C3AED;">📅 What Happens Next:</h3>
        <ol>
          <li><strong>Review Process:</strong> We'll review your application within 48 hours</li>
          <li><strong>Selection Notification:</strong> Selected testers receive download links</li>
          <li><strong>Onboarding:</strong> Get access to browser extension and mobile app</li>
          <li><strong>Start Testing:</strong> Begin earning VVT tokens immediately</li>
          <li><strong>Feedback:</strong> Share your experience through our beta channel</li>
        </ol>
        
        <div style="background: #EEF2FF; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #4338CA;"><strong>💡 Pro Tip:</strong> Follow us on social media for beta program updates and announcements!</p>
        </div>
        
        <p>Questions? Reply to this email or join our community Discord for real-time updates.</p>
        
        <p>Best regards,<br>
        <strong>The ViewerValue Team</strong><br>
        <em>Monetizing the Attention Economy</em></p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #6B7280;">
          ViewerValue Technologies LLC<br>
          This email was sent regarding your beta testing application.<br>
          Application ID: ${applicationId}
        </p>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'admin@viewervalue.net',
      subject: `🚀 New Beta Application: ${data.name}`,
      html: adminEmailContent
    });

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: data.email,
      subject: '🎉 ViewerValue Beta Application Received - Next Steps Inside',
      html: applicantEmailContent
    });

    // Log application data (in production, save to database)
    console.log('Beta Application Submitted:', {
      applicationId,
      name: data.name,
      email: data.email,
      platforms: data.platforms,
      devices: data.devices,
      timestamp: new Date().toISOString()
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        applicationId,
        message: 'Beta application submitted successfully'
      })
    };

  } catch (error) {
    console.error('Beta application error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        error: 'Failed to process beta application',
        details: error.message
      })
    };
  }
};

// Handle CORS preflight requests
if (event.httpMethod === 'OPTIONS') {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    },
    body: ''
  };
}

