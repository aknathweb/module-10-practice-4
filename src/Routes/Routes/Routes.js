import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogInSignUp/LogIn/LogIn";
import SignUp from "../../Pages/LogInSignUp/SignUp/SignUp";
import TramsAndConditions from "../../Pages/LogInSignUp/SignUp/TramsAndConditions";
import DetailsNews from "../../Pages/Shared/DetailsNews/DetailsNews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>,
                errorElement: <div><h1>Path not found</h1></div>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoute><DetailsNews></DetailsNews></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/termsandconditions',
                element: <TramsAndConditions></TramsAndConditions>
            }
        ])
    },
    {
        path: '*',
        element: <div><h1>Path not found</h1></div>
    }
])