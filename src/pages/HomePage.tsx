import React from 'react';
import { Link } from 'react-router-dom';
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
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Client
            <span className="block text-purple-200">Prospecting Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Find, analyze, and connect with potential customers through intelligent lead generation tools. 
            Discover companies, contacts, and opportunities with real-time data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your prospecting process with our intelligent lead generation workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Search & Filter</h3>
              <p className="text-gray-600">
                Use our advanced filters to find companies by industry, location, size, technology stack, and more
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Analyze & Verify</h3>
              <p className="text-gray-600">
                Get detailed insights about companies including contact information, tech stack, and business intelligence
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Export & Connect</h3>
              <p className="text-gray-600">
                Export leads to CSV or sync directly with your CRM. Set up alerts for new opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Lead Generation Tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access 9 intelligent tools to find and analyze potential clients with real-time data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Company Searcher</h3>
              <p className="text-gray-600">
                Filter companies by location, industry, size, and revenue using Clearbit, Apollo, and Crunchbase data
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Finder</h3>
              <p className="text-gray-600">
                Find verified decision-makers with email, LinkedIn, and contact information using Hunter.io and PeopleDataLabs
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website Error Finder</h3>
              <p className="text-gray-600">
                Detect WordPress errors, expired SSL certificates, and website downtime to find sales opportunities
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Stack Lookup</h3>
              <p className="text-gray-600">
                Identify what CMS, frameworks, and tools companies use via Wappalyzer API integration
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Domain Watcher</h3>
              <p className="text-gray-600">
                Monitor newly registered domains filtered by industry keywords to catch emerging businesses
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Postings Scanner</h3>
              <p className="text-gray-600">
                Find companies actively hiring for web, marketing, and IT roles using Adzuna and Indeed APIs
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Business Finder</h3>
              <p className="text-gray-600">
                Search local businesses in specific areas using Google Maps and Yelp API integrations
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Alerts</h3>
              <p className="text-gray-600">
                AI-driven monitoring for website changes, product launches, and pricing updates
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-lg p-3 w-12 h-12 mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitor Tracking</h3>
              <p className="text-gray-600">
                Monitor competitor websites for changes, new pages, and announcements to stay ahead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Business</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're an agency, freelancer, or sales team, Prospectify adapts to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Agencies</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Find clients with website issues and outdated technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Track competitor activities and market opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Generate qualified leads for your team automatically</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Freelancers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Discover businesses needing your specific skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Find local companies in your area actively hiring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Get contact details of decision makers instantly</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Sales Teams</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Build targeted prospect lists with verified contact data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Integrate seamlessly with your existing CRM system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-200 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Monitor lead sources and track conversion rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free and scale as your business grows. All plans include real-time data and exports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">£0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>50 searches per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic company data</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
              >
                Get Started Free
              </Link>
            </div>

            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">£29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>500 searches per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced filters</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>CSV export</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">For serious prospectors</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">£79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>2,000 searches per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>All lead generation tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>CRM integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Lead alerts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Agency Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Agency</h3>
              <p className="text-gray-600 mb-6">For teams and agencies</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">£199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited searches</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Team management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Premium support</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses already using Prospectify to grow their client base
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Prospectify has completely transformed our lead generation process. We've increased our qualified leads by 300% in just 3 months."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">CEO, Digital Growth Agency</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The contact finder tool is incredibly accurate. I've connected with more decision makers in the past month than in the previous year."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Marcus Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Sales Director, TechSolutions</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As a freelance web developer, the website error finder has been a goldmine. I've landed 5 new clients from businesses with website issues."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emma Thompson</h4>
                  <p className="text-gray-600 text-sm">Freelance Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest prospecting strategies and industry insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="text-purple-600 text-sm font-semibold mb-2">STRATEGY</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  10 Email Templates That Convert Prospects Into Clients
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover proven email templates that help you connect with prospects and close more deals...
                </p>
                <Link to="/blog/email-templates" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="text-purple-600 text-sm font-semibold mb-2">TOOLS</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Use Website Error Detection for Lead Generation
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to identify businesses with website problems and turn them into clients...
                </p>
                <Link to="/blog/website-error-detection" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-purple-600 text-sm font-semibold mb-2">GROWTH</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Building a Profitable Agency with AI-Powered Prospecting
                </h3>
                <p className="text-gray-600 mb-4">
                  Case study: How one agency scaled from £10k to £50k MRR using intelligent lead generation...
                </p>
                <Link to="/blog/agency-case-study" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              View All Articles <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Prospecting Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Join thousands of businesses already using AI-powered lead generation to grow their client base. 
            Start your free trial and discover your next big opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Start Free Trial <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
            >
              Contact Sales
            </Link>
          </div>
          <div className="flex items-center justify-center mt-8 space-x-8 text-purple-200">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              <span>Real-time Data</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>14-Day Free Trial</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;