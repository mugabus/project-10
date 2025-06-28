'use client'

import { useApp } from '@/contexts/AppContext'
import { Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export default function LatestActivities() {
  const { activities } = useApp()
  const latestActivities = activities.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our recent events, training sessions, and community programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestActivities.map((activity) => (
            <div key={activity.id} className="card overflow-hidden">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(activity.date).toLocaleDateString()}</span>
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                    {activity.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex items-center text-sm text-primary-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Community Event</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/activities" className="btn-primary">
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  )
}