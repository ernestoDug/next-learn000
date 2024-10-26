import DashboardSkeleton from '@/app/ui/skeletons';

// Оскільки loading.tsxє вищим рівнем /invoices/page.tsxі /customers/page.tsxу файловій системі, 
// він також застосовується до цих сторінок.
// Ми можемо змінити це за допомогою груп маршрутів ому Створимо  папку (overview) та  перемістемо 
//  loading.tsx та page.tsx
// епер loading.tsxфайл застосовуватиметься лише до сторінки огляду панелі інструментів.
//Коли ви створюєте нову папку за допомогою круглих дужок (), назва не буде включена в URL-шлях. 
// Так /dashboard/(overview)/page.tsxстає /dashboard.
// Тут ви використовуєте групу маршрутів, щоб забезпечити loading.tsxзастосування лише 
// до сторінки огляду панелі інструментів. 
export default function Loading() {
    return     <DashboardSkeleton />;

  }  