import Breadcumb from "../../Components/Breadcumb";
import About from "../../Components/About";
import Solution from "../../Components/Solution";
import Discover from "../../Components/Discover";
import { NEWS_ITEMS } from "../../data";
import { Outlet } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
        <div className="max-container">
          <Breadcumb 
          pageName='Aviza News'
          title='Aviza News'
          />
        </div>
        <About 
        otherPage="button"
        changeButton={false}
        order='order-1'
        />
        <Discover 
        custom="flex-col"
        order="order-1"
        ForCol={true}
        className='mt-[148px]'
        item={NEWS_ITEMS}
        text='!max-w-full'
        />
        <Solution />

        
    </>
  )
}

export default NewsPage