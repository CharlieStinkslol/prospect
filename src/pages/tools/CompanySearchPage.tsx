import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, DollarSign, Building, Download, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

interface Company {
  id: string;
  name: string;
  domain: string;
  industry: string;
  location: string;
  employees: string;
  revenue: string;
  description: string;
  founded: number;
  logo?: string;
}

interface SearchFilters {
  industry: string;
  location: string;
  employeeRange: string;
  revenueRange: string;
  keywords: string;
}

const CompanySearchPage: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    industry: '',
    location: '',
    employeeRange: '',
    revenueRange: '',
    keywords: ''
  });
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Manufacturing',
    'Consulting',
    'Education',
    'Real Estate',
    'Marketing',
    'Legal'
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-1000',
    '1000+'
  ];

  const revenueRanges = [
    '<£1M',
    '£1M-£10M',
    '£10M-£100M',
    '£100M+'
  ];

  const searchCompanies = async () => {
    setLoading(true);
    try {
      // Simulate API call to multiple data sources
      const mockCompanies: Company[] = [
        {
          id: '1',
          name: 'TechStart Solutions',
          domain: 'techstartsolutions.com',
          industry: 'Technology',
          location: 'London, UK',
          employees: '11-50',
          revenue: '£1M-£10M',
          description: 'Innovative software development company specializing in web applications and mobile solutions.',
          founded: 2019,
          logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
        },
        {
          id: '2',
          name: 'Digital Marketing Hub',
          domain: 'digitalmarketinghub.co.uk',
          industry: 'Marketing',
          location: 'Manchester, UK',
          employees: '51-200',
          revenue: '£10M-£100M',
          description: 'Full-service digital marketing agency helping businesses grow their online presence.',
          founded: 2015,
          logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
        },
        {
          id: '3',
          name: 'HealthTech Innovations',
          domain: 'healthtechinnovations.com',
          industry: 'Healthcare',
          location: 'Edinburgh, UK',
          employees: '201-1000',
          revenue: '£100M+',
          description: 'Leading healthcare technology company developing innovative medical software solutions.',
          founded: 2012,
          logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
        }
      ];

      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCompanies(mockCompanies);
      toast.success(`Found ${mockCompanies.length} companies matching your criteria`);
    } catch (error) {
      toast.error('Error searching companies. Please try again.');
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportResults = () => {
    if (companies.length === 0) {
      toast.error('No data to export');
      return;
    }

    const csvContent = [
      ['Name', 'Domain', 'Industry', 'Location', 'Employees', 'Revenue', 'Founded', 'Description'],
      ...companies.map(company => [
        company.name,
        company.domain,
        company.industry,
        company.location,
        company.employees,
        company.revenue,
        company.founded.toString(),
        company.description
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `company-search-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    toast.success('Results exported successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Searcher</h1>
          <p className="text-gray-600">
            Find companies by industry, location, size, and revenue using real-time data from multiple sources.
          </p>
        </div>

        {/* Search Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies by name or keywords..."
                  value={filters.keywords}
                  onChange={(e) => setFilters({ ...filters, keywords: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
              <button
                onClick={searchCompanies}
                disabled={loading}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    value={filters.industry}
                    onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., London, UK"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select
                    value={filters.employeeRange}
                    onChange={(e) => setFilters({ ...filters, employeeRange: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Any Size</option>
                    {employeeRanges.map(range => (
                      <option key={range} value={range}>{range} employees</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Revenue Range</label>
                  <select
                    value={filters.revenueRange}
                    onChange={(e) => setFilters({ ...filters, revenueRange: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Any Revenue</option>
                    {revenueRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {companies.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Results ({companies.length} companies found)
                </h3>
                <button
                  onClick={exportResults}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {companies.map((company) => (
                <div key={company.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Building className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                          <span className="text-sm text-gray-500">({company.domain})</span>
                        </div>
                        <p className="text-gray-600 mb-4">{company.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Building className="h-4 w-4 mr-2" />
                            <span>{company.industry}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{company.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{company.employees} employees</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="h-4 w-4 mr-2" />
                            <span>{company.revenue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && companies.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or use different keywords to find companies.
            </p>
            <button
              onClick={searchCompanies}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Search Companies
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Searching companies...</h3>
            <p className="text-gray-600">
              We're searching multiple data sources to find the best matches for your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanySearchPage;