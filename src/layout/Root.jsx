import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../components/Navbar"

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
    </>
  )
}
