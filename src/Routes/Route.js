import '../index.css';
import AboutPage from '../pages/About/AboutPage';
import Home from '../pages/Home/HomePage';
import ContactPage from '../pages/Contact/ContactPage';
import NewsPage from '../pages/News/NewsPage';
import NewsLayout from '../pages/News';
import NewsDetail from '../pages/News/NewsDetail';
import TrainingPage from '../pages/Training/TrainingPage';
import TrainingDetail from '../pages/Training/TrainingDetail';
import TrainingLayout from '../pages/Training';
import TermOfUs from '../Components/TermOfUs';
import NotFound from '../pages/NotFound/NotFound';
import Search from '../pages/Search/Search';
import LoginLayout from '../pages/Login';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import ForgotPass from '../pages/Login/ForgotPass';
import SiteLayout from '../pages/SiteLayout/SiteLayout';


       

const routes = [
    {
        path:'/' ,  
        element: <SiteLayout /> ,
        children: [
            {
                index: true , 
                element:<Home /> 
            },
            {
                path:'/About'  , 
                element:<AboutPage /> 
            },
            {
                path:'/Contact'  , 
                element:<ContactPage /> 
            },
            {
                path:'/News'  , 
                element:<NewsLayout />,
                children: [
                    {
                        index: true , 
                        element:<NewsPage /> 
                    },
                    {
                        path: 'categories' , 
                        element:<NewsDetail /> 
                    },
                ] 
            },
            {
                path:'/Trainings'  , 
                element:<TrainingLayout />,
                children: [
                    {
                        index: true , 
                        element:<TrainingPage /> 
                    },
                    {
                        path: ':slug' , 
                        element:<TrainingDetail /> 
                    },
                ] 
            },
            {
                path:'/Search'  , 
                element:<Search />
            },
            {
                path:'/Term'  , 
                element:<TermOfUs /> 
            },
            {
                path:'/Login'  , 
                element:<LoginLayout />,
                children: [
                    {
                        index: true , 
                        element:<Login /> 
                    },
                    {
                        path: 'Register' , 
                        element:<Register /> 
                    },
                    {
                        path: 'ForgotPassword', 
                        element:<ForgotPass /> 
                    },
                    {
                        path: '*', 
                        element:<NotFound /> 
                    }
                ] 
            },
            {
                path: "*" , 
                element:<NotFound /> 
            }
        ]
    }
]

export default routes