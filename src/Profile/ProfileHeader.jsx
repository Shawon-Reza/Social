import React from 'react'
import UploadProfilePage from './UploadProfilePage'

const ProfileHeader = ({ data }) => {
    console.log(data)
    return (
        <div className="bg-white shadow-xl rounded-lg max-w-full max-h-[550px]">
            {/* Cover Photo */}
            <div className="relative h-[40%]">
                <img
                    className="w-full rounded-t-lg object-cover max-h-[270px] min-h-[200px]"
                    src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/109754369/original/7d68bae2733a0643c7b6d1376f66f3450c1b8207/create-a-premium-facebook-cover.jpg"
                    alt="cover_Profile"
                />
                
                {/* Profile Image Upload Section */}
                <div className="absolute left-5 lg:left-10 -bottom-12 lg:-bottom-20 h-28 w-28 rounded-2xl bg-gray-100">
                    <UploadProfilePage />
                </div>
            </div>

            {/* Profile Information Section */}
            <div className="flex py-15 md:py-8 pl-8 rounded-lg h-[60%] flex-col sm:flex-row sm:justify-between">
                <div className='w-[20%]'>

                </div>
                <div className="sm:w-[40%] mb-4 sm:mb-0">
                    <h1 className="text-3xl font-bold pb-2">{data?.username || 'Reza'}</h1>
                    <p className="text-sm opacity-60 mb-2">{data?.bio || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}</p>
                    <h3 className="text-sm opacity-60">{data?.followers || '1000'} followers</h3>
                </div>

                <div className="sm:w-[40%] flex justify-between sm:justify-around sm:mt-0 mt-4">
                    <div>
                        <p className="text-sm font-semibold">Posts</p>
                        <p className="text-lg font-bold">{data?.posts || '103k'}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Friends</p>
                        <p className="text-lg font-bold">{data?.friends || '103k'}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Likes</p>
                        <p className="font-bold text-lg">{data?.likes || '103k'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
