import Breadcumb from "../../Components/Breadcumb";
import About from "../../Components/About";
import Solution from "../../Components/Solution";
import Discover from "../../Components/Discover";
import { NEWS_ITEMS } from "../../data";
import { Outlet } from "react-router-dom";


const NewsLayout = () => {
  return (
    <>
        

        <Outlet />
    </>
  )
}

export default NewsLayout