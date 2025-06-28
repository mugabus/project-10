'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { 
  BarChart3, 
  Users, 
  Calendar, 
  Settings, 
  FileText, 
  Trophy,
  Activity,
  Eye
} from 'lucide-react'

type TabType = 'dashboard' | 'settings' | 'about' | 'services' | 'activities'

export default function Admin() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const { siteSettings, aboutContent, services, activities } = useApp()

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'about', name: 'About', icon: FileText },
    { id: 'services', name: 'Services', icon: Trophy },
    { id: 'activities', name: 'Activities', icon: Activity },
  ]

  const stats = [
    { label: 'Total Services', value: services.length, icon: Trophy, color: 'text-blue-600' },
    { label: 'Total Activities', value: activities.length, icon: Activity, color: 'text-green-600' },
    { label: 'Active Programs', value: '3', icon: Users, color: 'text-purple-600' },
    { label: 'Monthly Views', value: '1.2K', icon: Eye, color: 'text-orange-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your academy's content and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && <DashboardContent stats={stats} />}
            {activeTab === 'settings' && <SettingsContent />}
            {activeTab === 'about' && <AboutContent />}
            {activeTab === 'services' && <ServicesContent />}
            {activeTab === 'activities' && <ActivitiesContent />}
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardContent({ stats }: { stats: any[] }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 rounded-full p-2">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">New activity added</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-green-100 rounded-full p-2">
              <Trophy className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Service updated</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsContent() {
  const { siteSettings, setSiteSettings } = useApp()
  const [formData, setFormData] = useState(siteSettings)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSiteSettings(formData)
    alert('Settings saved successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name.startsWith('socialMedia.')) {
      const field = name.split('.')[1]
      setFormData({
        ...formData,
        socialMedia: {
          ...formData.socialMedia,
          [field]: value
        }
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Site Settings</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Name
            </label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <h4 className="text-md font-medium text-gray-900 mb-4">Social Media</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facebook
              </label>
              <input
                type="url"
                name="socialMedia.facebook"
                value={formData.socialMedia.facebook}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Twitter
              </label>
              <input
                type="url"
                name="socialMedia.twitter"
                value={formData.socialMedia.twitter}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram
              </label>
              <input
                type="url"
                name="socialMedia.instagram"
                value={formData.socialMedia.instagram}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  )
}

function AboutContent() {
  const { aboutContent, setAboutContent } = useApp()
  const [formData, setFormData] = useState(aboutContent)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAboutContent(formData)
    alert('About content saved successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleGoalChange = (index: number, value: string) => {
    const newGoals = [...formData.goals]
    newGoals[index] = value
    setFormData({ ...formData, goals: newGoals })
  }

  const addGoal = () => {
    setFormData({
      ...formData,
      goals: [...formData.goals, '']
    })
  }

  const removeGoal = (index: number) => {
    const newGoals = formData.goals.filter((_, i) => i !== index)
    setFormData({ ...formData, goals: newGoals })
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">About Content</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vision
          </label>
          <textarea
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mission
          </label>
          <textarea
            name="mission"
            value={formData.mission}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Goals
          </label>
          <div className="space-y-2">
            {formData.goals.map((goal, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => handleGoalChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => removeGoal(index)}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGoal}
              className="btn-secondary"
            >
              Add Goal
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  )
}

function ServicesContent() {
  const { services, addService, updateService, deleteService } = useApp()
  const [isEditing, setIsEditing] = useState(false)
  const [editingService, setEditingService] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    features: ['']
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const serviceData = {
      ...formData,
      id: editingService?.id || Date.now().toString(),
      features: formData.features.filter(f => f.trim() !== '')
    }

    if (editingService) {
      updateService(editingService.id, serviceData)
    } else {
      addService(serviceData)
    }

    resetForm()
    alert('Service saved successfully!')
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image: '', features: [''] })
    setIsEditing(false)
    setEditingService(null)
  }

  const handleEdit = (service: any) => {
    setFormData(service)
    setEditingService(service)
    setIsEditing(true)
  }

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData({ ...formData, features: newFeatures })
  }

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    })
  }

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index)
    setFormData({ ...formData, features: newFeatures })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Services Management</h3>
        <button
          onClick={() => setIsEditing(true)}
          className="btn-primary"
        >
          Add Service
        </button>
      </div>

      {/* Service Form */}
      {isEditing && (
        <div className="card p-6">
          <h4 className="text-md font-semibold text-gray-900 mb-4">
            {editingService ? 'Edit Service' : 'Add New Service'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
              <div className="space-y-2">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex space-x-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="btn-secondary"
                >
                  Add Feature
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="btn-primary">
                {editingService ? 'Update' : 'Create'} Service
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Services List */}
      <div className="card p-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Existing Services</h4>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">{service.title}</h5>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                  <div className="mt-2">
                    <span className="text-sm text-gray-500">Features: </span>
                    <span className="text-sm text-gray-700">{service.features.join(', ')}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(service)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this service?')) {
                        deleteService(service.id)
                      }
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ActivitiesContent() {
  const { activities, addActivity, updateActivity, deleteActivity } = useApp()
  const [isEditing, setIsEditing] = useState(false)
  const [editingActivity, setEditingActivity] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    video: '',
    date: '',
    category: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const activityData = {
      ...formData,
      id: editingActivity?.id || Date.now().toString()
    }

    if (editingActivity) {
      updateActivity(editingActivity.id, activityData)
    } else {
      addActivity(activityData)
    }

    resetForm()
    alert('Activity saved successfully!')
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image: '', video: '', date: '', category: '' })
    setIsEditing(false)
    setEditingActivity(null)
  }

  const handleEdit = (activity: any) => {
    setFormData(activity)
    setEditingActivity(activity)
    setIsEditing(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Activities Management</h3>
        <button
          onClick={() => setIsEditing(true)}
          className="btn-primary"
        >
          Add Activity
        </button>
      </div>

      {/* Activity Form */}
      {isEditing && (
        <div className="card p-6">
          <h4 className="text-md font-semibold text-gray-900 mb-4">
            {editingActivity ? 'Edit Activity' : 'Add New Activity'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video URL (Optional)</label>
                <input
                  type="url"
                  value={formData.video}
                  onChange={(e) => setFormData({ ...formData, video: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="btn-primary">
                {editingActivity ? 'Update' : 'Create'} Activity
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Activities List */}
      <div className="card p-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Existing Activities</h4>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">{activity.title}</h5>
                  <p className="text-gray-600 mt-1">{activity.description}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <span>Category: {activity.category}</span>
                    <span>Date: {new Date(activity.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(activity)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this activity?')) {
                        deleteActivity(activity.id)
                      }
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}