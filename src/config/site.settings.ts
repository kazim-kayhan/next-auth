import { ChartPieIcon, Cog6ToothIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { User } from 'lucide-react';

export const siteSettings = {
  name: 'KabulShop',
  description: '',
  logo: {
    url: '/logo.jpg',
    alt: 'KabulShop',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  author: {
    name: 'KabulShop',
    websiteUrl: 'https://kabulshop.vercel.app',
    address: '',
  },
  headerLinks: [],
  authorizedLinks: [{ name: 'Profile', href: '#', icon: User }],
  currencyCode: 'USD',
  sidebarLinks: {
    admin: {
      navigation: [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Customers', href: '#', icon: UsersIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
      ],
      productsManagement: [
        { id: 1, name: 'Products', href: '#', initial: 'P', current: false },
        { id: 2, name: 'Categories', href: '#', initial: 'C', current: false },
        { id: 3, name: 'Zone', href: '#', initial: 'Z', current: false },
      ],
      siteSettings: [{ name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false }],
    },
  },
  product: {
    placeholder: '/product-placeholder.svg',
  },
  avatar: {
    placeholder: '/avatar-placeholder.svg',
  },
};
