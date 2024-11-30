import Header from "@components/layouts/Header";
import Sidebar from "@components/layouts/Sidebar";
import { Nunito } from "next/font/google";

const pjs = Nunito({ subsets: ["latin"] });

import "../globals.css";

export default function RootLayout({ children }) {
  return (
    // fix missing in the root layout
    <html>
      <body className={`${pjs.className}`}>
        <Header />
        <main className="pl-7 flex overflow-y-hidden bg-white">
          <Sidebar />
          <div className="ml-8 mt-7 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
2;
