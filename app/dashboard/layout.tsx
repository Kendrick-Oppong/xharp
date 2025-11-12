import { SideBar } from "./components/side-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* <header className="bg-white p-4 shadow-md sticky top-0 z-10">
          <h2 className="text-lg font-semibold">HOME OVERVIEW</h2>
        </header> */}

        <main className="px-8 mt-[51px] flex-1">{children}</main>
      </div>
    </div>
  );
}
