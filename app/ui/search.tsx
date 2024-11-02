'use client';

// КОМПОНЕНТ  рядок запиту
// ОСЬ ЩО ТУТ ВІДБУВАЄТЬСЯ
// ${pathname}це поточний шлях, у вашому випадку, "/dashboard/invoices".
// Коли користувач вводить текст у рядок пошуку, params.toString()
// цей введений текст перетворюється на формат, зручний для URL-адреси.
// replace(${pathname}?${params.toString()})оновлює URL-адресу пошуковими даними користувача.
//  Наприклад, /dashboard/invoices?query=leeякщо користувач шукає "Лі".
// URL-адреса оновлюється без перезавантаження сторінки завдяки клієнтській навігації Next.js 

// *****************
// <Search>є клієнтським компонентом, тому ви використали useSearchParams()хук для доступу до параметрів із клієнта.
{/* <Table>є серверним компонентом, який отримує власні дані,
   тому ви можете передати проп searchParamsзі сторінки компоненту.
Як правило, якщо ви хочете прочитати параметри з клієнта, 
використовуйте useSearchParams()хук, оскільки це дозволяє уникнути повернення на сервер. */}

// pnpm i use-debounce

import { useDebouncedCallback } from 'use-debounce';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // useDebouncedCallback запустить код лише через 
  // певний час після того, як користувач припинить вводити текст (300 мс).
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);


    // URLSearchParamsце веб-інтерфейс API, який надає службові 
    //  для маніпулювання параметрами запиту URL-адреси

    // +
    // Далі setрядок параметрів на основі введених користувачем даних. Якщо вхід порожній, ви хочете delete
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}

        onChange={(e) => {
          handleSearch(e.target.value);
        }}

      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
