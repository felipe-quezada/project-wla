import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Root = () => {
  return (
    <>
    <title>Construcciones Salas Reyes</title>
    <header>
      <NavbarComponent /> 
    </header>
    <main className="d-flex flex-column justify-content-center">
      <Outlet />
    </main>
    <footer className="position-relative bottom-0" style={{width: '100%'}}>
      <Footer />
    </footer>
    </>
  )
}
