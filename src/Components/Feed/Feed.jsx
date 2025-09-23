import React from 'react'
import Navbar from '../Navbar'
import SocialFeed from './SocialFeed'
import { useParams } from 'react-router-dom'

const Feed = () => {
   
    return (
        <div>
            <div className='py-7'>
                <Navbar></Navbar>
            </div>
            <div className='bg-[#E2E8F0]'>
                <SocialFeed></SocialFeed>
            </div>
        </div>
    )
}

export default Feed