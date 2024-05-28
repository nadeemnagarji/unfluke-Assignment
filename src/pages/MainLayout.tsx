import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen">
      <div className="h-[80px] md:pl-56 fixed w-full inset-y-0 z-50 ">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full   w-56 flex-col fixed  inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className=" md:pl-60 pt-[80px] flex flex-col justify-center items-center h-[90%] bg-transparent ">
        {children}
      </main>
    </div>
  );
}
