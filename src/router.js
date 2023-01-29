import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import Charity from "./Charity";
import Backdroptest from "./components/Backdroptest";
import CreatePost from "./components/CreatePost";
import DonorPage from "./components/DonorPage";
import HomePage from "./components/HomePage";
import SponsoreePage from "./components/SponsoreePage";
import DeleteSp from "./components/DeleteSp";
import DeleteDonor from "./components/DeleteDonor";
import CreateDonor from "./components/CreateDonor";


export const router = createBrowserRouter([
    {path: "/",
    element: <App/>,
    children: [
        {path: "",
         element: <HomePage/>},
         {path: "/donor",
        element: <DonorPage/>},
        {path: "/sponsoree",
        element: <SponsoreePage/>},
        {path: "/charity",
        element: <Charity/>},
        {path: "/charity",
        children: [
            {path: "create_sponsoree",
            element: <Backdroptest/>},
            {path: "delete_sponsoree",
            element: <DeleteSp/>},
            {path: "create_post",
            element: <CreatePost/>},
            {path: "delete_donor",
            element: <DeleteDonor/>},
            {path: "create_donor",
            element: <CreateDonor/>}
    ]}
    ]
}
])