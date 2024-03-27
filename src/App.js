import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>

    </BrowserRouter>
  )
}

export default App