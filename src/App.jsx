import "./App.css";
import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import ResponsiveHeader from "./components/Header/ResponsiveHeader.jsx";
import {useGoogleAnalytics} from "./hooks/useGoogleAnalytics.jsx";

function App() {
  // Initialize Google Analytics
  useGoogleAnalytics("G-DPD9X33W43");

  return (
    <>
      <ScrollToTop />
      <ResponsiveHeader />
      {<Outlet />}
      <Footer />
    </>
  );
}

export default App;
