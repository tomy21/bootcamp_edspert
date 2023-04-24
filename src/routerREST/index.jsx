import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Index from "../pages/Contents";
import Detail from "../pages/Details";
import store from "./store";
import { Provider } from "react-redux";

const routeList = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index: true,
                element: <Index/>,
            },
            {
                path: 'movie/:id',
                element: <Detail/>
            }
        ]
    }
])
const RouterREST = () => {
    // return <RouterProvider router={routeList}/>
    return <Provider store={store}>
        <RouterProvider router={routeList}/>
    </Provider>
}

export default RouterREST;