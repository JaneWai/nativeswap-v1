import React from 'react'
import { ArrowLeftRight, Twitter, Github, MessageCircle } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 p-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">NativeSwap</h3>
                  <p className="text-sm text-amber-700">Swap for Freedom</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                The first truly decentralized protocol for swapping native ETH to native Bitcoin. 
                Experience financial freedom without boundaries, restrictions, or intermediaries.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all">
                  <Twitter className="w-4 h-4 text-gray-700" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all">
                  <Github className="w-4 h-4 text-gray-700" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all">
                  <MessageCircle className="w-4 h-4 text-gray-700" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Protocol</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Audits</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Documentation</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Bug Reports</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Feature Requests</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/30 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">
              © 2024 NativeSwap. Empowering financial freedom through decentralized technology.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
