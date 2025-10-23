
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import Login from "./components/Login";
import Joyas from "./components/Joyas";
import RutaProtegida from "./components/RutaProtegida";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/> }></Route>
          <Route path="/Ofertas" element={<Ofertas />}></Route>
          <Route path="/administracion" element={<Login /> }></Route>
          <Route path="/joyas" element={<Joyas />}></Route>
                  <Route
                    path="/perfil"
                    element={
                      <RutaProtegida>
                        <Perfil />
                      </RutaProtegida>
                    }
                  ></Route> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App    