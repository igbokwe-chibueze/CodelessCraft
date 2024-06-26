import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import OnePlatform from "./sections/OnePlatform";
import { AppStore, BuildingTool, CTASection, Carousel, DesignWithLocalStyles, Footer, ForPros, IdealForEveryone, SoftwareBuilder } from "./sections";


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
                  <DesignWithLocalStyles/>
                  <IdealForEveryone/>
                  <BuildingTool/>
                  <ForPros/>
                  <CTASection/>
                  <Footer/>
                </section>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}