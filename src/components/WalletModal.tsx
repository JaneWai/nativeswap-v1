import React from 'react'
import { X, Wallet, Shield, Zap } from 'lucide-react'

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
  onConnect: () => void
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, onConnect }) => {
  if (!isOpen) return null

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using browser extension',
      popular: true
    },
    {
      name: 'WalletConnect',
      icon: '📱',
      description: 'Scan with mobile wallet',
      popular: false
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect with Coinbase',
      popular: false
    },
    {
      name: 'Ledger',
      icon: '🔒',
      description: 'Hardware wallet security',
      popular: false
    }
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md">
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Connect Wallet</h2>
              <p className="text-sm text-gray-600 mt-1">Choose your preferred wallet to start swapping</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Wallet Options */}
          <div className="space-y-3 mb-6">
            {wallets.map((wallet, index) => (
              <button
                key={index}
                onClick={onConnect}
                className="w-full p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all flex items-center space-x-4 group"
              >
                <div className="text-2xl">{wallet.icon}</div>
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800">{wallet.name}</span>
                    {wallet.popular && (
                      <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{wallet.description}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Security Notice */}
          <div className="rounded-2xl bg-orange-50/80 backdrop-blur-sm border border-orange-200/50 p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-orange-800 mb-1">Secure Connection</h3>
                <p className="text-sm text-orange-700">
                  NativeSwap uses industry-standard security protocols. Your wallet remains under your full control at all times.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Zap className="w-4 h-4 text-orange-500" />
              <span>Fast swaps</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-orange-500" />
              <span>Secure protocol</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletModal
