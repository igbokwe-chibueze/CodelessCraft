import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import OnePlatform from "./sections/OnePlatform";


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
                  {/* <Hero/> */}
                  <OnePlatform/>
                </section>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}