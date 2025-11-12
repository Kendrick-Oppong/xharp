import { SideBar } from "@/components/ui/side-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <main className="px-8 mt-[51px] flex-1">{children}</main>
      </div>
    </div>
  );
}
