'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { Calendar, Filter, Play } from 'lucide-react'

export default function Activities() {
  const { activities } = useApp()
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...Array.from(new Set(activities.map(activity => activity.category)))]
  
  const filteredActivities = selectedCategory === 'All' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Activities</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our training sessions, tournaments, community events, and special programs 
              that make our academy a vibrant center for youth development.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="card overflow-hidden group">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {activity.video && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-primary-600 rounded-full p-3 transition-all duration-200 transform hover:scale-110">
                        <Play className="h-6 w-6 ml-1" />
                      </button>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(activity.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No activities found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}