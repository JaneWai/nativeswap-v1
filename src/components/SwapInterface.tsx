import React, { useState } from 'react'
import { ArrowUpDown, Settings, Info, Zap } from 'lucide-react'

const SwapInterface: React.FC = () => {
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSwap = async () => {
    setIsLoading(true)
    // Simulate swap process
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const handleFlipTokens = () => {
    // In a real app, this would flip ETH/BTC
    const temp = fromAmount
    setFromAmount(toAmount)
    setToAmount(temp)
  }

  return (
    <div className="max-w-md mx-auto mb-16" id="swap">
      {/* Main Swap Card */}
      <div className="relative">
        {/* Glassmorphism Container */}
        <div className="relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Swap Tokens</h2>
            <button className="p-2 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all">
              <Settings className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* From Token */}
          <div className="relative mb-2">
            <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">From</span>
                <span className="text-sm text-amber-700">Balance: 2.5 ETH</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/40 min-w-[100px]">
                  <img 
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=32&h=32&fit=crop&crop=center" 
                    alt="ETH" 
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-semibold text-gray-800">ETH</span>
                </div>
                <div className="flex-1 text-right ml-4">
                  <input
                    type="text"
                    placeholder="0.0"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="w-full bg-transparent text-2xl font-semibold text-gray-800 placeholder-gray-500 outline-none text-right"
                  />
                  <div className="text-sm text-amber-700 mt-1">
                    ≈ $3,847.50
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-2 relative z-10">
            <button
              onClick={handleFlipTokens}
              className="p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/70 hover:bg-white/80 transition-all shadow-lg"
            >
              <ArrowUpDown className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* To Token */}
          <div className="relative mb-6">
            <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">To</span>
                <span className="text-sm text-amber-700">Balance: 0.0 BTC</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/40 min-w-[100px]">
                  <img 
                    src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=32&h=32&fit=crop&crop=center" 
                    alt="BTC" 
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-semibold text-gray-800">BTC</span>
                </div>
                <div className="flex-1 text-right ml-4">
                  <input
                    type="text"
                    placeholder="0.0"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    className="w-full bg-transparent text-2xl font-semibold text-gray-800 placeholder-gray-500 outline-none text-right"
                  />
                  <div className="text-sm text-amber-700 mt-1">
                    ≈ $3,847.50
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Details */}
          <div className="rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 p-4 mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-700">Exchange Rate</span>
              <span className="text-gray-800 font-medium">1 ETH = 0.0567 BTC</span>
            </div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-700">Network Fee</span>
              <span className="text-gray-800 font-medium">~$12.50</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">Estimated Time</span>
              <div className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-amber-500" />
                <span className="text-gray-800 font-medium">~15 minutes</span>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            disabled={!fromAmount || isLoading}
            className="w-full relative group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-75 group-hover:opacity-100 transition-opacity blur-sm"></div>
            <div className="relative py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold text-lg flex items-center justify-center space-x-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing Swap...</span>
                </>
              ) : (
                <span>Swap Tokens</span>
              )}
            </div>
          </button>

          {/* Info Banner */}
          <div className="mt-4 p-3 rounded-xl bg-amber-50/80 backdrop-blur-sm border border-amber-200/50 flex items-start space-x-2">
            <Info className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              This is a cross-chain swap that bridges native ETH to native Bitcoin. 
              Your transaction will be processed through our secure bridge protocol.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapInterface
