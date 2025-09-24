import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Landing Page components
import LandingPage from "../Components/LandingPage/LandingPage";
import LandingPageAdsRequest from "../Components/LandingPage/LandingPageAdsRequest";

// Authentication components
import LoginPage from "../Components/Authentication/LoginPage";
import SignUpPage from "../Components/Authentication/SignUpPage";
import Feed from "../Components/Feed/Feed";
import Reels from "../Components/Feed/Reels";
import { mockReels } from "../Components/Feed/mockReels";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>
    },
    {
        path: "/advertisement-request",
        element: <LandingPageAdsRequest></LandingPageAdsRequest>
    },
    {
        path: "/signin",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/signup",
        element: <SignUpPage></SignUpPage>
    },
    // Feed routes..........
    {
        path: "/feed",
        element: <Feed></Feed>
    },
    {
        path: "/feed/:id",
        element: <Reels ></Reels>
    },
]); 

export default router;