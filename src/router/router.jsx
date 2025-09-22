import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import LandingPage from "../LandingPage/LandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>
    },
]); 

export default router;