import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";


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
                </section>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}