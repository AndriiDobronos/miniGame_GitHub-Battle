import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Popular from "../pages/Popular/Popular";
import Battle from "../pages/Battle/Battle";
import Nav from "./Nav";
import Results from "../pages/Battle/Results"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/popular",
                element: <Popular />
            },
            {
                path: "/battle",
                element: <Battle />,
            },
            {
                path: "/battle/results",
                element: <Results />,
            },
            {
                path: "*",
                element: (
                    <h2>Error</h2>
                )
            }
        ]
    },
]);

const App = () => {
    return  <div className={"container"}>
        <RouterProvider router={router} />
    </div>
}
export default App;