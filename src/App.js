import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Home, SuggestionBox, Testimonials, Video } from "./pages"
import Invoice from "./components/App"
import AuthContext from "./context/auth"
import { Header, Footer } from "./pages"

export default function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Home />
              <Video />
              <Testimonials />
              <Footer />
            </React.Fragment>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/suggestion-box" element={<SuggestionBox />}></Route>
        {user && (
          <Route
            path={`/invoicer/${user.user_metadata.full_name}`}
            element={<Invoice />}
          ></Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}
