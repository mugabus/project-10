import { Shield, Users, Trophy, Heart, BookOpen, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Professional Training',
    description: 'Expert coaches provide world-class training to develop technical skills and tactical understanding.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Bringing together youth from different backgrounds to promote unity and friendship through sport.'
  },
  {
    icon: Trophy,
    title: 'Competitive Excellence',
    description: 'Regular tournaments and competitions to test skills and provide pathways to higher levels.'
  },
  {
    icon: Heart,
    title: 'Character Development',
    description: 'Focus on building leadership, discipline, and life skills alongside football abilities.'
  },
  {
    icon: BookOpen,
    title: 'Education Support',
    description: 'Academic support and educational opportunities for all academy participants.'
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Connections with international academies and scholarship opportunities for exceptional talent.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive development programs that go beyond football training to shape future leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:scale-105 transition-transform duration-200">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}