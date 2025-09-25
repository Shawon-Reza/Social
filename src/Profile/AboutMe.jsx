import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { HiMiniCalendarDateRange } from 'react-icons/hi2'
import { MdOutlineWork } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'

const AboutMe = () => {
    return (
        <div className=' '>
            <div className='flex justify-between text-lg font-semibold space-y-3'>
                <h3 className='font-bold text-xl'>About Me </h3>
                <BsThreeDots />
            </div>
            <div className='flex flex-col opacity-70 space-y-1' >
                <div className='flex justify-between'>
                    <SlLocationPin size={20} />
                    <p className='text-lg'>Yogyakarta, ID</p>
                </div>
                <div className='flex justify-between'>
                    <HiMiniCalendarDateRange size={20}/>
                    <p className='text-lg'>Joined June 2012</p>
                </div>
                <div className='flex  justify-between truncate'>
                    <MdOutlineWork size={20}/>
                    <p className='text-lg'>Working at Sebo Studio</p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe