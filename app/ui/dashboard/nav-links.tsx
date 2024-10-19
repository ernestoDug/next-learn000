// це тому що ми тут використувуюме ум усю патх нейм хуки завжди клієнтьски
'use client';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
// це бібліотека сстилів для умовних класів активне чи ні 
// а хук юс патх нейм допогмає вказувати де були де є  

import {
  UserGroupIcon,
  HomeModernIcon,
  DocumentDuplicateIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
// дамєо назви іконкам без дефісів і слово айкон
// https://heroicons.com/outline

import Link from 'next/link';
// це щоб навігація була без зайвих оновлень 

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Додому', href: '/dashboard', icon: HomeModernIcon },
  {
    name: 'Рахунки',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Клієнти', href: '/dashboard/customers', icon: UserGroupIcon },

  // ++++++++++++++++++++++мой
  { name: 'Мой бредик', href: '/dashboard/mytec', icon: BuildingStorefrontIcon },
];




export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // цей лінк замінив тег а
          <Link
            key={link.name}
            href={link.href}
            // ось класи щоб активні посилані робити іншим кольором 
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
