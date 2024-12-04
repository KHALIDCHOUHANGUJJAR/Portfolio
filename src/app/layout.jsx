import Footer from "@/components/footer/footer";
import "./style/globals.css";
import Header from "@/components/header/header";

export const metadata = {
  title: "My PortFolio",
  description: "My PortFolio For showing my Skills and experties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

