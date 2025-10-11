import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import SocietyImgUpload from './SocietyImgUpload';
import { useNavigate, useParams } from 'react-router-dom';

const GlobalCreoleSocietyCard = ({ posts = 10300, members = 2564, media = 234 }) => {
  const navigate = useNavigate();
const {id}=useParams()

  return (
    <div className=" rounded-xl mx-auto flex flex-col items-center text-center">




      <div className=' relative bg-white w-full p rounded-xl p-4 mt-20 lg:mt-36 pt-15'>
        <h2 className="text-lg font-semibold text-gray-800 mt-4">Global Creole Society</h2>
        <div className="flex justify-around w-full mt-4 text-gray-600">
          <div>
            <p className="text-xl font-bold">{posts.toLocaleString()}</p>
            <p className="text-sm">Post</p>
          </div>
          <div>
            <p className="text-xl font-bold">{members.toLocaleString()}</p>
            <p className="text-sm">Members</p>
          </div>
          <div>
            <p className="text-xl font-bold">{media.toLocaleString()}</p>
            <p className="text-sm">Media</p>
          </div>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition duration-200">
          Invite
        </button>

        <section className="absolute -top-15 lg:-top-36 left-1/2 -translate-x-1/2 ">
          <SocietyImgUpload />
        </section>

      </div>



      <div className="rounded-lg  mt-5  mx-auto">
        <div className="flex items-center mb-4 bg-white rounded-lg p-2 px-4">
          <img src="https://www.shutterstock.com/image-photo/happy-handsome-young-business-leader-260nw-2375039955.jpg" alt="Creator" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <p className="text-gray-600 text-sm">Society Created by</p>
            <p className="font-semibold">Ahmad Nur Fawaid</p>
            <p className="text-gray-500 text-xs">12 April 08:28 PM</p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate(`/society/${id}/pending_posts`)
          }}
          className="mb-4 bg-white rounded-lg p-2 px-4 flex justify-between cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-101" >
          <p className="text-gray-600 font-semibold">Pending Posts</p>
          <p className="text-lg font-bold">12</p>
        </div>

        <div
          onClick={() => {
            navigate(`/society/${id}/pending_members`)
          }}
          className="mb-4 flex justify-between bg-white rounded-lg p-2 px-4 cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-101">
          <p className="text-gray-600 font-semibold">Pending Members</p>
          <p className="text-lg font-bold">12</p>
        </div>
        <div className="mb-4 bg-white rounded-lg p-2 px-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600 font-semibold">About Group</p>
            <button className=" text-sm hover:underline border border-[#E2E8F0]  p-1 px-6 rounded-lg cursor-pointer">Edit</button>
          </div>
          <hr className=' border border-[#F0F0F0] my-3' />
          <p className="text-gray-800">UI/UX Designers group</p>
          <p className="text-gray-600 text-sm mt-1">This group is meant for designers - a place to learn and share - to ask questions, network, and improve.</p>
          <p className="text-gray-600 text-sm mt-1">Hashtag your posts to help others easily navigate. Avoid using more than a single hashtag per post.</p>
          <p className="text-gray-600 text-sm mt-1">Suggested tags include: #job #blog #dribbble #learn #discuss #contest #portfolio</p>
        </div>
      </div>

    </div>
  );
};

export default GlobalCreoleSocietyCard;