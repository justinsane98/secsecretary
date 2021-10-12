import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({props, children}) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <div className="font-serif pt-11">
        <Header/>
        <div className="mx-4 768px:mx-12 1200px:mx-auto 1200px:w-3/4 1400px:w-1/2">
          <main className="min-h-full pb-12 relative">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
