import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { dashboardRoutes } from '../../utils/routes';

const MobileNav = () => {
  const { pathname } = useRouter();
  return (
    <nav className='fixed inset-x-0 bottom-0 bg-slate-900 py-3 flex justify-center md:hidden border-t border-slate-800'>
      <ul className='flex space-x-2'>
        {dashboardRoutes.map(({ name, route, icon: Icon }, index) => (
          <li key={index}>
            <Link href={route}>
              <a
                className={`py-4 px-6 flex flex-col items-center text-white space-x-3 rounded-2xl text-sm ${
                  pathname === route ||
                  pathname.replace('/dashboard', '').includes(route)
                    ? 'bg-slate-800 text-gray-200'
                    : 'text-gray-400 hover:filter hover:brightness-125 bg-slate-900'
                }`}
              >
                <div className='scale-75'>
                  <Icon />
                </div>
                <span className='mt-1'>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
