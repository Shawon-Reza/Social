
const friendsMock = [
  { id: 1, name: "Emon Hasan", avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
  { id: 2, name: "Emon Hasan", avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
  { id: 3, name: "Emon Hasan", avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
  { id: 4, name: "Emon Hasan", avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
  { id: 5, name: "Emon Hasan", avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
  { id: 6, name: "Emon Hasan", avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
]

const FriendsGrid = ({ friends = friendsMock }) => {
  return (
    <div className=" text-[#3D3D3D]">
      <div className="flex justify-between items-center mb-3 border-b border-[#F0F0F0]">
        <h2 className="text-lg font-semibold">Friends</h2>
        <button className="text-sm text-blue-500 hover:underline">See All</button>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {friends.map(friend => (
          <div key={friend.id} className="flex flex-col items-center">
            <div className="w-17 h-17 rounded-xl overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105 cursor-pointer">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-full h-full object-cover "
              />
            </div>
            <p className="mt-2 text-sm text-center truncate w-full">{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendsGrid
