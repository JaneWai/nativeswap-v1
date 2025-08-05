import React from 'react'
import { ArrowLeftRight, Wallet } from 'lucide-react'

interface HeaderProps {
  onConnectWallet: () => void
  isConnected: boolean
}

const Header: React.FC<HeaderProps> = ({ onConnectWallet, isConnected }) => {
  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg">
                <ArrowLeftRight className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-white/30 backdrop-blur-sm border border-white/40"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">NativeSwap</h1>
              <p className="text-sm text-amber-700">Swap for Freedom</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#swap" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Swap
            </a>
            <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Connect Wallet Button */}
          <button
            onClick={onConnectWallet}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-75 group-hover:opacity-100 transition-opacity blur-sm"></div>
            <div className="relative px-6 py-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 flex items-center space-x-2 hover:bg-white/50 transition-all text-gray-800">
              <Wallet className="w-4 h-4" />
              <span className="font-medium">
                {isConnected ? '0x1234...5678' : 'Connect Wallet'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
