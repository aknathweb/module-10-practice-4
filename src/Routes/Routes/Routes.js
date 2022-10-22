import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogInLogOut/LogIn/LogIn";
import SignUp from "../../Pages/LogInLogOut/SignUp/SignUp";
import DetailsNews from "../../Pages/Shared/DetailsNews/DetailsNews";

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
                element: <DetailsNews></DetailsNews>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ])
    },
    {
        path: '*',
        element: <div><h1>Path not found</h1></div>
    }
])