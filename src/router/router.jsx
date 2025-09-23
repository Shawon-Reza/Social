import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import LandingPage from "../LandingPage/LandingPage";
import LandingPageAdsRequest from "../LandingPage/LandingPageAdsRequest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>
    },
    {
        path: "/advertisement-request",
        element: <LandingPageAdsRequest></LandingPageAdsRequest>
    },
]); 

export default router;