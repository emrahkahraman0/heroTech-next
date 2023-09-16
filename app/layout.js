import "@/styles/grid.css";
import "@/styles/style.min.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Hero Tech",
  description: "Next.js Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
