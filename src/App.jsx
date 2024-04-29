import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import OnePlatform from "./sections/OnePlatform";
import { AppStore, Carousel, SoftwareBuilder } from "./sections";


export default function App() {
  return (
    <main className="font-baseFont">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar/>
                {/* <BackToTop usage={"section"}/> */}
                <section>
                  <Hero/>
                  <OnePlatform/>
                  <AppStore/>
                  <Carousel/>
                  <SoftwareBuilder/>
                </section>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}