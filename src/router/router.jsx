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
import HelpSection from "../Components/Settings/HelpSection";
import ProfileSettings from "../Components/Settings/ProfileSettings";
import ChangePassword from "../Components/Authentication/ChangePassword";
import ChangeEmail from "../Components/Authentication/ChangeEmail";
import ChatApp from "../Messaging/ChatApp";
import VideoCall from "../Messaging/VideoCall";
import AudioCall from "../Messaging/AudioCall";
import LiveStream from "../Components/Feed/LiveStream";
import FriendsList from "../Profile/FriendsList";
import Notifications from "../Components/Notifications";
import OrderCart from "../Components/Marketplace/OrderCart";
import ProductManagement from "../Components/MyProduct/ProductManagement";
import CreateProduct from "../Components/MyProduct/CreateProduct";
import MyProductList from "../Components/MyProduct/MyProductList";
import ProductCard from "../Components/Marketplace/ProductCard";
import MyProductDetails from "../Components/MyProduct/MyProductDetails";
import Payment from "../Components/Marketplace/Payment";
import PendingMembers from "../Components/MySociety/PendingMembers";


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
        path: "/feed/livestream",
        element: <LiveStream></LiveStream>
    },

    {
        path: "/feed/:id",
        element: <Reels ></Reels>
    },
    {
        path: "/profile",
        element: <Profile></Profile>
    },
    {
        path: "/profile/friendslist",
        element: <FriendsList></FriendsList>
    },


    // Markets places routing.................
    {
        path: "/marketplace",
        element: <MarketPlace></MarketPlace>
    },
    {
        path: "/marketplace/orderlist",
        element: <OrderCart></OrderCart>
    },
    {
        path: "/marketplace/:id",
        element: <ProductPage></ProductPage>
    },
    {
        path: "/marketplace/:id/payment",
        element: <Payment></Payment>
    },
    {
        path: "/marketplace/myproduct",
        element: <ProductManagement></ProductManagement>
    },
    {
        path: "/marketplace/myproduct/product details",
        element: <MyProductDetails></MyProductDetails>
    },
    {
        path: "/marketplace/myproduct/list",
        element: <MyProductList></MyProductList>
    },
    {
        path: "/marketplace/myproduct/addproduct",
        element:  <CreateProduct></CreateProduct>
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
        path: "/society/:id",
        element: <MySociety></MySociety>
    },
    {
        path: "/society/:id/pending_members",
        element: <PendingMembers></PendingMembers>
    },
    {
        path: "/society/:id/pending_posts",
        element: <PendingPosts></PendingPosts>
    },
    // Setting..................................................
    {
        path: "/settings/help_center",
        element: <HelpSection></HelpSection>
    },
    {
        path: "/settings/profile_settings",
        element: <ProfileSettings></ProfileSettings>
    },

    // Authentication............................
    {
        path: "/settings/profile_settings/chnage_password",
        element: <ChangePassword></ChangePassword>
    },
    {
        path: "/settings/profile_settings/chnage_email",
        element: <ChangeEmail></ChangeEmail>
    },
    // Chat app, messesing......................................
    {
        path: "/chat",
        element: <ChatApp></ChatApp>
    },
    {
        path: "/chat/videocall",
        element: <VideoCall></VideoCall>
    },
    {
        path: "/chat/audiocall",
        element: <AudioCall></AudioCall>
    },
    // Notification..............................
    {
        path: "notifications",
        element: <Notifications></Notifications>
    }


]);

export default router;