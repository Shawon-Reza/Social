import React from 'react'
import Navbar from '../Navbar'
import SocialFeed from './SocialFeed'
import { useParams } from 'react-router-dom'
import GlobalChatPopUp from './GlobalChatPopUp'


const Feed = () => {

    return (
        <div className='relative bg-gray-100'>
            <div className='py-7'>
                <Navbar></Navbar>
            </div>
            <div className='2xl:px-44 xl:px-36 lg:px-28 md:px-20 sm:px-14 px-8'>
                <SocialFeed></SocialFeed>
            </div>
            <div className='fixed bottom-5 right-5'>
                <GlobalChatPopUp></GlobalChatPopUp>
                
            </div>
        </div>
    )
}

export default Feed