import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* інтер шрифт для баді  */}
        
     <h1 className="text-blue-500">Маленькі кроки</h1>
        {children}
        </body>
    </html>
  );
}
