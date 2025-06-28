'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Types
export interface SiteSettings {
  siteName: string
  logo: string
  email: string
  phone: string
  address: string
  socialMedia: {
    facebook: string
    twitter: string
    instagram: string
  }
}

export interface AboutContent {
  vision: string
  mission: string
  goals: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  features: string[]
}

export interface Activity {
  id: string
  title: string
  description: string
  image: string
  video?: string
  date: string
  category: string
}

interface AppContextType {
  siteSettings: SiteSettings
  setSiteSettings: (settings: SiteSettings) => void
  aboutContent: AboutContent
  setAboutContent: (content: AboutContent) => void
  services: Service[]
  setServices: (services: Service[]) => void
  activities: Activity[]
  setActivities: (activities: Activity[]) => void
  addService: (service: Service) => void
  updateService: (id: string, service: Service) => void
  deleteService: (id: string) => void
  addActivity: (activity: Activity) => void
  updateActivity: (id: string, activity: Activity) => void
  deleteActivity: (id: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    siteName: 'Nakivale Soccer Academy',
    logo: '/logo.png',
    email: 'info@nakivalesocceracademy.com',
    phone: '+256 700 123 456',
    address: 'Nakivale Refugee Settlement, Isingiro District, Uganda',
    socialMedia: {
      facebook: 'https://facebook.com/nakivalesocceracademy',
      twitter: 'https://twitter.com/nakivalesoccer',
      instagram: 'https://instagram.com/nakivalesocceracademy'
    }
  })

  const [aboutContent, setAboutContent] = useState<AboutContent>({
    vision: 'To become the leading soccer academy in East Africa, developing young talent and promoting peace through sport.',
    mission: 'To provide quality soccer training, education, and life skills to refugee and local youth, creating opportunities for personal growth and community development.',
    goals: [
      'Develop young soccer talent through professional training',
      'Promote peace and unity through sport',
      'Provide educational opportunities to underprivileged youth',
      'Create pathways to professional soccer careers',
      'Foster community development through sports initiatives'
    ]
  })

  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      title: 'Youth Training Programs',
      description: 'Comprehensive soccer training for youth aged 8-18, focusing on technical skills, tactical awareness, and physical development.',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
      features: ['Professional coaching', 'Age-appropriate training', 'Character development', 'Life skills education']
    },
    {
      id: '2',
      title: 'Talent Development',
      description: 'Advanced programs for promising players with potential for professional careers, including mentorship and career guidance.',
      image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg',
      features: ['Elite coaching', 'Performance analysis', 'Career guidance', 'Scholarship opportunities']
    },
    {
      id: '3',
      title: 'Community Outreach',
      description: 'Programs that use soccer as a tool for community development, peace-building, and social integration.',
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg',
      features: ['Community tournaments', 'Peace-building workshops', 'Social integration', 'Leadership development']
    }
  ])

  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      title: 'Annual Inter-Camp Tournament',
      description: 'Our biggest event of the year bringing together teams from different refugee camps for a week-long tournament.',
      image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg',
      date: '2024-07-15',
      category: 'Tournament'
    },
    {
      id: '2',
      title: 'Weekly Training Sessions',
      description: 'Regular training sessions for all age groups, focusing on skill development and teamwork.',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
      date: '2024-01-08',
      category: 'Training'
    },
    {
      id: '3',
      title: 'Community Peace Match',
      description: 'Special matches organized to promote peace and unity between different communities.',
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg',
      date: '2024-06-21',
      category: 'Community'
    }
  ])

  const addService = (service: Service) => {
    setServices([...services, service])
  }

  const updateService = (id: string, updatedService: Service) => {
    setServices(services.map(service => service.id === id ? updatedService : service))
  }

  const deleteService = (id: string) => {
    setServices(services.filter(service => service.id !== id))
  }

  const addActivity = (activity: Activity) => {
    setActivities([...activities, activity])
  }

  const updateActivity = (id: string, updatedActivity: Activity) => {
    setActivities(activities.map(activity => activity.id === id ? updatedActivity : activity))
  }

  const deleteActivity = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id))
  }

  return (
    <AppContext.Provider value={{
      siteSettings,
      setSiteSettings,
      aboutContent,
      setAboutContent,
      services,
      setServices,
      activities,
      setActivities,
      addService,
      updateService,
      deleteService,
      addActivity,
      updateActivity,
      deleteActivity
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}