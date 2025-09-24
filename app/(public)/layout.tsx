import Header  from "@/components/layout/header";
import Footer from "@/components/layout/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-airbanBlue animate-fade min-h-screen flex flex-col">
      
      <Header />
      {children}
      <Footer />
    </div>
  );
}
