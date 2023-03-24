import DashboardPage from "../../Pages/DashboardPage/DashboardPage";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import PoliticsPage from "../../Pages/PoliticsPage/PoliticsPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import StoryPage from "../../Pages/StoryPage/StoryPage";
import UserPage from "../../Pages/UserPage/UserPage";


export const routeData = {
    
    public:[
        {
            path:'/register',
            element:<RegisterPage />
        },
        {
            path:'/login',
            element:<LoginPage />
        },
        {
            path:'/',
            element:<HomePage />
        },
        {
            path:'/stories/:id',
            element:<StoryPage />
        },
        {
            path:'/discussions/:id',
            element:<PoliticsPage />
        },
        {
            path:'/user/:id',
            element:<UserPage />
        }

        

    ],
    private:[
        {
            path:'/dashboard',
            element:<DashboardPage />
        }


    ]
}