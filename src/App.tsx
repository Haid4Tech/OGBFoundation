import { lazy } from "react";
import ScrollToTop from "@/util/scroll-to-top";

const HomeScreen = lazy(() => import("./app/routes/home"));

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="font-lato">
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
