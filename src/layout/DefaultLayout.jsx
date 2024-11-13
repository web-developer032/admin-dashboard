import { useState } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/index";

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <section className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <section className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </section>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </section>
        {/* <!-- ===== Content Area End ===== --> */}
      </section>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </section>
  );
};

export default DefaultLayout;
