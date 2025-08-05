import React, { useState } from 'react'
import Header from './components/Header'
import SwapInterface from './components/SwapInterface'
import Features from './components/Features'
import Footer from './components/Footer'
import WalletModal from './components/WalletModal'

function App() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-inter">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        <Header 
          onConnectWallet={() => setIsWalletModalOpen(true)}
          isConnected={isConnected}
        />
        
        <main className="container mx-auto px-4 py-8">
          <SwapInterface />
          <Features />
        </main>
        
        <Footer />
        
        <WalletModal 
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
          onConnect={() => {
            setIsConnected(true)
            setIsWalletModalOpen(false)
          }}
        />
      </div>
    </div>
  )
}

export default App
