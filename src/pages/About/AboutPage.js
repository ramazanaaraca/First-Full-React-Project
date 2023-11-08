import Breadcumb from "../../Components/Breadcumb";
import OurValues from "../../Components/OurValues";
import About from "../../Components/About";
import Blog from "../../Components/Blog";
import Solution from "../../Components/Solution";

const AboutPage = () => {
  return (
    <>
        <div className="max-container">
        <Breadcumb 
        pageName='About Aviza'
        breadBg={true}
        title='About Us'/>
        </div>
        
        <OurValues />
        <About 
        otherPage="paragraf"
        />
        <Blog />
        <Solution />
    </>
  )
}

export default AboutPage;