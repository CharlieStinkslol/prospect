import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Search,
  Users,
  Globe,
  Code,
  Eye,
  Briefcase,
  MapPin,
  Bell,
  TrendingUp,
  BarChart3,
  Download,
  Settings,
  Crown
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const tools = [
    {
      id: 'company-search',
      name: 'Company Searcher',
      description: 'Find companies by industry, location, size, and revenue',
      icon: Search,
      color: 'bg-blue-500',
      link: '/tools/company-search'
    },
    {
      id: 'contact-finder',
      name: 'Contact Finder',
      description: 'Get verified decision-maker contact information',
      icon: Users,
      color: 'bg-green-500',
      link: '/tools/contact-finder'
    },
    {
      id: 'website-errors',
      name: 'Website Error Finder',
      description: 'Detect WordPress errors, SSL issues, and downtime',
      icon: Globe,
      color: 'bg-red-500',
      link: '/tools/website-errors'
    },
    {
      id: 'tech-stack',
      name: 'Tech Stack Lookup',
      description: 'Identify CMS, frameworks, and tools companies use',
      icon: Code,
      color: 'bg-purple-500',
      link: '/tools/tech-stack'
    },
    {
      id: 'domain-watcher',
      name: 'Domain Watcher',
      description: 'Monitor newly registered domains by industry',
      icon: Eye,
      color: 'bg-yellow-500',
      link: '/tools/domain-watcher'
    },
    {
      id: 'job-scanner',
      name: 'Job Postings Scanner',
      description: 'Find companies hiring for web/marketing/IT roles',
      icon: Briefcase,
      color: 'bg-indigo-500',
      link: '/tools/job-scanner'
    },
    {
      id: 'local-business',
      name: 'Local Business Finder',
      description: 'Search local businesses via Google Maps & Yelp',
      icon: MapPin,
      color: 'bg-pink-500',
      link: '/tools/local-business'
    },
    {
      id: 'lead-alerts',
      name: 'Lead Alerts',
      description: 'AI-driven monitoring for website changes',
      icon: Bell,
      color: 'bg-orange-500',
      link: '/tools/lead-alerts'
    },
    {
      id: 'competitor-tracking',
      name: 'Competitor Tracking',
      description: 'Monitor competitor websites for changes',
      icon: TrendingUp,
      color: 'bg-teal-500',
      link: '/tools/competitor-tracking'
    }
  ];

  const stats = [
    { label: 'Total Searches', value: '0', change: '+0%' },
    { label: 'Leads Generated', value: '0', change: '+0%' },
    { label: 'Exports Made', value: '0', change: '+0%' },
    { label: 'API Calls', value: '0', change: '+0%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Search className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold text-purple-600">Prospectify</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/settings"
                className="text-gray-400 hover:text-gray-500"
              >
                <Settings className="h-6 w-6" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user?.user_metadata?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {user?.user_metadata?.full_name || 'User'}
                  </p>
                  <p className="text-xs text-gray-500">Free Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.user_metadata?.full_name?.split(' ')[0] || 'there'}!
          </h1>
          <p className="text-gray-600 mt-2">
            Ready to find your next big client opportunity? Choose a tool to get started.
          </p>
        </div>

        {/* Upgrade Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Crown className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Upgrade to Pro</h3>
                <p className="text-purple-100">
                  Unlock unlimited searches, CRM integrations, and advanced filters
                </p>
              </div>
            </div>
            <Link
              to="/pricing"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Upgrade Now
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            to="/tools/company-search"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Find Companies
          </Link>
          <Link
            to="/tools/contact-finder"
            className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Find Contacts
          </Link>
          <Link
            to="/exports"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center"
          >
            <Download className="h-5 w-5 mr-2" />
            Export Data
          </Link>
        </div>

        {/* Tools Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Lead Generation Tools</h2>
            <Link
              to="/tools"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              View all tools →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.link}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${tool.color} rounded-lg p-3`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <BarChart3 className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="text-center py-12">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No recent activity</p>
              <p className="text-gray-400 text-sm mt-2">
                Start using our tools to see your activity here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;