import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BookmarkIcon from '../Icons/BookmarkIcon';
import MenuIcon from '../Icons/MenuIcon';

const dashboardRoutes = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: MenuIcon,
  },
  {
    name: 'Subscription',
    route: '/dashboard/subscription',
    icon: BookmarkIcon,
  },
];

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <aside className='flex flex-col w-60 h-screen bg-slate-900 border-r border-slate-800 pt-9 px-6'>
      <Link href='/'>
        <a>
          <h1 className='block text-transparent text-lg md:text-2xl bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 font-semibold'>
            Paymony
          </h1>
        </a>
      </Link>
      <ul className='mt-14 space-y-2 text-sm'>
        {dashboardRoutes.map(({ route, name, icon: Icon }, index) => (
          <li key={index}>
            <Link href={route}>
              <a
                className={`py-4 px-6 flex items-center text-white space-x-3 rounded-2xl ${
                  pathname === route || pathname.includes(route)
                    ? 'bg-slate-800 text-gray-200'
                    : 'text-gray-400 hover:filter hover:brightness-125 bg-slate-900'
                }`}
              >
                <Icon />
                <span className='mt-1'>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
