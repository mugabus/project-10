import { Users, Trophy, Clock, MapPin } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Active Players',
    description: 'Young athletes training with us'
  },
  {
    icon: Trophy,
    number: '25+',
    label: 'Championships',
    description: 'Tournaments won this year'
  },
  {
    icon: Clock,
    number: '5+',
    label: 'Years Experience',
    description: 'Developing young talent'
  },
  {
    icon: MapPin,
    number: '10+',
    label: 'Communities',
    description: 'Served across the region'
  }
]

export default function Stats() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            See how we're making a difference in the community through football development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-800 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-primary-200" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-primary-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}