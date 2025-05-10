import { usePathname } from 'next/navigation';
import { Bell, Briefcase, Home, Settings, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname, nav) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/Menu',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Stock',
      href: '/stock',
      icon: <User size={20} />,
      active: isNavItemActive(pathname, '/stock'),
      position: 'top',
    },
    {
      name: 'Ventas',
      href: '/ventas',
      icon: <Bell size={20} />,
      active: isNavItemActive(pathname, '/ventas'),
      position: 'top',
    },
    {
      name: 'Reportes',
      href: '/reportes',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/reportes'),
      position: 'top',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};
