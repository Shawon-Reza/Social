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
import ShareModal from "../Components/Feed/ShareModal";
import Profile from "../Profile/Profile";
import MarketPlace from "../Components/Marketplace/MarketPlace";

import ProductPage from "../Components/Marketplace/ProductPage";
import SocietyCardGrid from "../Components/Society/SocietyCardGrid";
import JoinSocietyList from "../Components/Society/JoinSocietyList";
import MySocietyList from "../Components/Society/MySocietyList";
import FriendCardGrid from "../Components/FriendRequests/FriendCardGrid";
import FriendRequestList from "../Components/FriendRequests/FriendRequestList";
import AddFriendList from "../Components/FriendRequests/AddFriendList";
import MySociety from "../Components/MySociety/MySociety";
import PendingPosts from "../Components/MySociety/PendingPosts";


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
    {
        path: "/profile",
        element: <Profile></Profile>
    },


    // Markets places routing.................
    {
        path: "/marketplace",
        element: <MarketPlace></MarketPlace>
    },
    {
        path: "/marketplace/:id",
        element: <ProductPage></ProductPage>
    },
    //Society grid.......................
    {
        path: "/society",
        element: <SocietyCardGrid></SocietyCardGrid>
    },
    {
        path: "/society/my_society_list",
        element: <MySocietyList></MySocietyList>
    },
    {
        path: "/society/join_society_list",
        element: <JoinSocietyList></JoinSocietyList>
    },
    // Friend Request

    {
        path: "/frient_requests",
        element: <FriendCardGrid></FriendCardGrid>
    },
    {
        path: "/frient_requests/list",
        element: <FriendRequestList></FriendRequestList>
    },
    {
        path: "/frient_requests/add_friends",
        element: <AddFriendList></AddFriendList>
    },
    // My society..................................
    {
        path: "/mysociety",
        element: <MySociety></MySociety>
    },
    {
        path: "pending_posts",
        element: <PendingPosts></PendingPosts>
    }
]);

export default router;