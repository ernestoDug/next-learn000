// Ось як ви можете створювати різні сторінки в Next.js: створіть новий сегмент маршруту за допомогою папки та додайте pageв нього файл.

// це оболонка ддоя карток щоб вони поступово рендерилися 
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

import { Suspense } from 'react';
// саспенс для резервного інтерф поки вантажиться
import { RevenueChartSkeleton, LatestInvoicesSkeleton,   CardsSkeleton,
} from '@/app/ui/skeletons';
 

import { fetchCardData } from '@/app/lib/data';
// Щоб отримати дані компонентsіи з бд,
 
export default async function Page() {
  // запити 
  // вся  запити виконуються каскадом один за одним 

//  деструкторизуємо що повертає функ  фетч кард дата
const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Панель інструментів
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
          {/* резервний вигляд */}
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
<Suspense fallback={<LatestInvoicesSkeleton /> }>

        <LatestInvoices  />

</Suspense>
        
      </div>
    </main>
  );
}