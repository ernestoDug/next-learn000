import '@/app/ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <h1 className="text-blue-500">Маленькі кроки</h1>
        {children}</body>
    </html>
  );
}
