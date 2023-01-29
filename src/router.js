import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import DonorPage from "./components/DonorPage";
import HomePage from "./components/HomePage";
import SponsoreePage from "./components/SponsoreePage";

export const router = createBrowserRouter([
    {path: "/",
    element: <App/>,
    children: [
        {path: "",
         element: <HomePage/>},
         {path: "/donor",
        element: <DonorPage/>},
        {path: "/sponsoree",
        element: <SponsoreePage/>
    }
    ]
}
])