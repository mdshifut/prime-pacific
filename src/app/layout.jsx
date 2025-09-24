import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import "./bootstrap.min.css";
import "./globals.css";
import { Open_Sans, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Travisa - Visa &amp; Immigration Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="keywords" />
        <meta name="description" />
        {/* Icon Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        {/*  <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        /> */}
        {/* Libraries Stylesheet */}
        {/* <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        /> */}
        {/* Customized Bootstrap Stylesheet */}
        {/* <link href="css/bootstrap.min.css" rel="stylesheet" /> */}
        {/* Template Stylesheet */}
        {/* <link href="css/style.css" rel="stylesheet" /> */}
      </head>
      <body className={`${openSans.className} ${poppins.className}`}>
        {/* Spinner Start */}
        {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-secondary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* Spinner End */}
        <TopBar />
        {/* <Header /> */}
        <Navbar />
        {children}

        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
