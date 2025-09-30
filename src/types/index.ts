export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  subscription_status: 'free' | 'starter' | 'pro' | 'agency';
  subscription_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'active' | 'canceled' | 'past_due';
  current_period_end: string;
  created_at: string;
}

export interface Company {
  id: string;
  name: string;
  domain: string;
  industry: string;
  location: string;
  employees: number;
  revenue?: number;
  description?: string;
  founded?: number;
  logo?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  title: string;
  company: string;
  linkedin?: string;
  phone?: string;
}

export interface SearchFilters {
  industry?: string;
  location?: string;
  employeeRange?: string;
  revenueRange?: string;
  technology?: string;
}

export interface LeadGenerationTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  active: boolean;
}