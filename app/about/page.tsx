'use client'

import { useApp } from '@/contexts/AppContext'
import { Target, Eye, CheckCircle } from 'lucide-react'

export default function About() {
  const { aboutContent } = useApp()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Academy</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Learn about our mission, vision, and the goals that drive us to develop young talent 
              and build stronger communities through football.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team training"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nakivale Soccer Academy was founded with a simple yet powerful vision: to use the 
                beautiful game of football as a tool for positive change in the lives of young people 
                in the Nakivale Refugee Settlement and surrounding communities.
              </p>
              <p className="text-lg text-gray-600">
                Through professional training, educational support, and community programs, we aim to 
                create opportunities for growth, unity, and hope for the next generation.
              </p>
            </div>
          </div>

          {/* Vision, Mission, Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card p-8 text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">{aboutContent.vision}</p>
            </div>

            {/* Mission */}
            <div className="card p-8 text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">{aboutContent.mission}</p>
            </div>

            {/* Goals */}
            <div className="card p-8">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Goals</h3>
              <ul className="space-y-3">
                {aboutContent.goals.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of our mission to develop young talent and build stronger communities through football.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Involved
            </a>
            <a href="/services" className="btn-secondary">
              Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}