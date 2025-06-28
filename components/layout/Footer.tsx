'use client'

import { useApp } from '@/contexts/AppContext'
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const { siteSettings } = useApp()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">{siteSettings.siteName}</span>
            </div>
            <p className="text-gray-300 mb-4">
              Developing young talent through football excellence and creating opportunities for growth in the community.
            </p>
            <div className="flex space-x-4">
              <a href={siteSettings.socialMedia.facebook} className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={siteSettings.socialMedia.twitter} className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={siteSettings.socialMedia.instagram} className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">{siteSettings.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">{siteSettings.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-300">{siteSettings.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-primary-400 transition-colors">About Us</a>
              <a href="/services" className="block text-gray-300 hover:text-primary-400 transition-colors">Services</a>
              <a href="/activities" className="block text-gray-300 hover:text-primary-400 transition-colors">Activities</a>
              <a href="/contact" className="block text-gray-300 hover:text-primary-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {siteSettings.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}