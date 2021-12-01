import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  About,
  CallToAction,
  Home,
  ScrollToTop,
  SuggestionBox,
  Testimonials,
  Video,
} from "./pages"
import Invoice from "./components/App"
import AuthContext from "./context/auth"
import { Header, Footer, Error } from "./pages"

export default function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        {user && <Route path="/" element={<Invoice />}></Route>}
        <Route
          path="/"
          element={
            <React.Fragment>
              <Home />
              <Video />
              <Testimonials />
              <CallToAction />
              <Footer />
            </React.Fragment>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/suggestion-box" element={<SuggestionBox />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
