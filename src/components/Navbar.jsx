import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import logo3D from '../assets/viewervalue-3d-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-card/50 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo3D} 
              alt="ViewerValue 3D Logo" 
              className="h-10 w-10 animate-float"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">ViewerValue</span>
              <span className="text-xs text-muted-foreground">Technologies LLC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tiers" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/tiers') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Investment Tiers
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/tiers">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/80 backdrop-blur-md rounded-lg mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tiers" 
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Investment Tiers
              </Link>
              
              <div className="border-t border-border pt-4">
                <Link to="/tiers">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

