import React from 'react'
import { Shield, Zap, Globe, Lock, ArrowLeftRight, Clock } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: <ArrowLeftRight className="w-8 h-8 text-orange-500" />,
      title: "Native Asset Swaps",
      description: "Swap native ETH directly to native Bitcoin without wrapped tokens or intermediaries"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Decentralized & Secure",
      description: "Built on trustless protocols with multi-signature security and audited smart contracts"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Lightning Fast",
      description: "Complete cross-chain swaps in under 15 minutes with optimized bridge technology"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "True Financial Freedom",
      description: "No KYC, no restrictions, no borders - swap freely between the world's top cryptocurrencies"
    },
    {
      icon: <Lock className="w-8 h-8 text-orange-500" />,
      title: "Non-Custodial",
      description: "You maintain full control of your assets throughout the entire swap process"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "24/7 Availability",
      description: "Swap anytime, anywhere - our protocol never sleeps and is always ready to serve"
    }
  ]

  return (
    <section className="py-16" id="features">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose NativeSwap?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the future of decentralized finance with our cutting-edge cross-chain technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group"
          >
            {/* Glassmorphism Card */}
            <div className="relative rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-6 hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-orange-100/80 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-75 blur-sm"></div>
          <div className="relative px-8 py-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50">
            <p className="text-lg font-medium text-gray-800">
              Ready to experience true financial freedom?
            </p>
            <p className="text-amber-700 mt-1">
              Start swapping with NativeSwap today
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
