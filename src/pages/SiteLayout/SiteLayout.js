import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Outlet } from "react-router-dom"

const SiteLayout = () => {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  )
}

export default SiteLayout