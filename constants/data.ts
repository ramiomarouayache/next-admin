import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Demo Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Client = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};
export type Order = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  status: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'dashboard'
  },
  {
    title: 'Orders',
    href: '/dashboard/orders',
    icon: 'ShoppingCart',
    label: 'commandes'
  },
  {
    title: 'Products',
    href: '/dashboard/products',
    icon: 'product',
    label: 'products'
  },
  {
    title: 'packaging',
    href: '/packaging',
    icon: 'box',
    label: 'packaging'
  },
  {
    title: 'Upsells',
    href: '/Upsells',
    icon: 'Ungroup',
    label: 'upsells'
  },
  {
    title: 'Reports',
    href: '/Reports',
    icon: 'ChartColumnBig',
    label: 'reports'
  },
  {
    title: 'Coupons',
    href: '/Coupons',
    icon: 'TicketPercent',
    label: 'coupons'
  },
  {
    title: 'Clients',
    href: '/dashboard/clients',
    icon: 'user2',
    label: 'clients'
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'userPen',
    label: 'profile'
  },
  {
    title: 'Todo',
    href: '/dashboard/todo',
    icon: 'todo',
    label: 'todo'
  },
  {
    title: 'Login',
    href: '',
    icon: 'login',
    label: 'login'
  }
];
