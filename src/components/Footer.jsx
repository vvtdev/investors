import { Link } from 'react-router-dom'
import logo3D from '../assets/viewervalue-3d-logo.png'

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo3D} 
                alt="ViewerValue 3D Logo" 
                className="h-8 w-8"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold gradient-text">ViewerValue</span>
                <span className="text-xs text-muted-foreground">Technologies LLC</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing the attention economy through fair compensation and blockchain technology. 
              Join us in building the future of content monetization.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 ViewerValue Technologies LLC. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/tiers" className="block text-muted-foreground hover:text-primary transition-colors">
                Investment Tiers
              </Link>
              <Link to="/dashboard" className="block text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Investment Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Investment involves risk. Past performance does not guarantee future results. 
            Please read our investment disclaimer carefully.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

