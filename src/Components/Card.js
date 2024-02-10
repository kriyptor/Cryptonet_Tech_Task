import React from 'react'

export default function Card({userData}) {
  return (
   <div className="flex justify-center mt-40 ">
     <div className="max-w-md mx-auto bg-white rounded-sm overflow-hidden shadow-lg md:flex">
    {/* Left Section (Image) */}
    <div className="md:w-1/3 p-2">
      <img
        className="w-full h-auto md:h-full md:w-auto object-cover"
        //extracting image prop
        src={userData.image}
        
      />
    </div>

    {/* Right Section (Text) */}
    <div className="md:w-2/3 p-7">
        {/* extracting user details from prop */}
        <p className="text-xl font-bold">{userData.firstName} {userData.lastName}</p>
        <p className="text-gray-600">{userData.gender}</p>
        <p className="text-gray-700">{userData.phone}</p>
    </div>
  </div>
   </div>
  )
}
