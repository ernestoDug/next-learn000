//  ви можете використовувати спеціальний layout.tsxфайл для створення інтерфейсу користувача, спільного для кількох сторінок.
import SideNav from '@/app/ui/dashboard/sidenav';

    // це ми додали для часткової часткової попередньої візуалізації ppr 
    // АЛЕ І В НЕКСТ КОНФІГ ЩОЙСЬ ДОДАЛИ
// ТЕПЕР Next.js попередньо візуалізує статичні частини вашого маршруту
//  та відкладає динамічні частини, доки користувач їх не запитає.
// Чудова перевага часткового попереднього відтворення полягає в тому,
//  що вам не потрібно змінювати код, щоб використовувати його. 
// Поки ви використовуєте Suspense для обгортання динамічних частин вашого маршруту, 
// Next.js знатиме, які частини вашого маршруту статичні, а які динамічні.
export const experimental_ppr = true;

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}