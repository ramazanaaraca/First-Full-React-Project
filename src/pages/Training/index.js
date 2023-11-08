import { Outlet } from "react-router-dom";
import Wrapper from '../../Components/Wrapper'
import Breadcumb from '../../Components/Breadcumb'
import Training from '../../Components/Training'
import { TRAINING_DATA } from '../../data'


const TrainingLayout = () => {
  return (
    <>
         

        <Outlet />
    </>
  )
}

export default TrainingLayout