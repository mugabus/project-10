import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Stats from '@/components/home/Stats'
import LatestActivities from '@/components/home/LatestActivities'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
      <LatestActivities />
    </div>
  )
}