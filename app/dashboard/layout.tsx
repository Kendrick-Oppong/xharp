import { MobileNav } from "@/components/ui/mobile-nav";
import { SideBar } from "@/components/ui/side-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh">

      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <main className="px-4 lg:px-8 mt-6 lg:mt-[51px] flex-1 pb-20 lg:pb-0">
          {children}
        </main>
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
