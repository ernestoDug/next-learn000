import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// імпортую стилі для модулів 
import styles from '@/app/ui/home.module.css';
// додатковий шрифт 
import { lusitana } from '@/app/ui/fonts';
// адаптиви
import Image from 'next/image';




export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        
        <div className={styles.shape} />
        {/* назва імпорта а шейп то клас  */}
        <p className={`${lusitana.className} styles.myсls`}>мій клас модуль стиль</p>
        {/* зверни увагу два класи в скислих лапках один для шрифту лустіна другий мій  */}


          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Привіт.</strong>  Тут ти будеш вчитись {' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Ти станеш краще
            </a>вперед
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Зарегся</span> <ArrowRightIcon className="w-30 md:w-2" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* десктоп */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      {/* мобілка */}

      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshots of the dashboard project showing mobile version"
      />
{/* 
Префікс точки зупину	Мінімальна ширина	CSS
sm	640 пікселів	@media (min-width: 640px) { ... }
md	768 пікселів	@media (min-width: 768px) { ... }
lg	1024 пікселів	@media (min-width: 1024px) { ... }
xl	1280 пікселів	@media (min-width: 1280px) { ... }
2xl	1536 пікселів	@media (min-width: 1536px) { ... } */}


        </div>
      </div>
    </main>
  );
}
