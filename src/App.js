import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./components/Navbar"
import About from "./screens/About"

const App = () => {

  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>

    </BrowserRouter>
  )
}

export default App