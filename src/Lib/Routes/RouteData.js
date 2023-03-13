import DashboardPage from "../../Pages/DashboardPage/DashboardPage";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import StoryPage from "../../Pages/StoryPage/StoryPage";


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
        }

        

    ],
    private:[
        {
            path:'/dashboard',
            element:<DashboardPage />
        }


    ]
}