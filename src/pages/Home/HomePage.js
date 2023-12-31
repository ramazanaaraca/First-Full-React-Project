import Breadcumb from "../../Components/Breadcumb";
import OurValues from "../../Components/OurValues";
import About from "../../Components/About";
import Blog from "../../Components/Blog";
import Solution from "../../Components/Solution";
import Heros from "../../Components/Hero";
import Sitetitle from "../../Components/Sitetitle";
import Discover from "../../Components/Discover";
import Exams from "../../Components/Exams";

const Home = () => {
  return (
    <>
        <Heros />
        <About 
        Parent='mt-[148px]'
        />
        <Sitetitle
        toPage='/Trainings'
        title='Discover our training'
        />
        <Discover />
        <Sitetitle
        toPage='/Trainings'
        title='Discover our exams'
        />
        <Exams
        
         />
        <Blog
        toPage='/News'
        />
        <Solution />
    </>
  )
}

export default Home;