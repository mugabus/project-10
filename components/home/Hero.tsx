'use client'

import { useApp } from '@/contexts/AppContext'
import { Play, Users, Trophy, Target } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const { siteSettings } = useApp()

  return (
    <section className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Developing Future
              <span className="text-primary-300"> Champions</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              {siteSettings.siteName} is dedicated to nurturing young talent through professional football training, 
              education, and community development in Nakivale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Our Programs
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Join Us Today
              </Link>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Soccer Training"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-primary-600 rounded-full p-4 transition-all duration-200 transform hover:scale-110">
                  <Play className="h-8 w-8 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 rounded-lg p-2">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Young Athletes</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Trophies Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}