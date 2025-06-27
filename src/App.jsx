import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { FundingProvider } from './contexts/FundingContext'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import TiersPage from './components/TiersPage'
import CheckoutPage from './components/CheckoutPage'
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <FundingProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tiers" element={<TiersPage />} />
                <Route path="/checkout/:tier" element={<CheckoutPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </FundingProvider>
    </AuthProvider>
  )
}

export default App

