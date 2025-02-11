import React from 'react';

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Feed Column */}
      <div className="col-span-8 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
            <div>
              <div className="font-bold text-lg">George Lobko</div>
              <div className="text-sm text-gray-500">Hi everyone, today I was on the most beautiful mountain in the world... 🌄</div>
            </div>
          </div>
          <div className="mt-6">
            <img src="https://fastly.picsum.photos/id/192/200/300.jpg?hmac=UAXa6z_MKaSlyDXrwECLl6XBp0jzyV3C2eSvsfMi_uc" alt="Lorem Ipsum" className="w-full h-64 object-cover rounded-xl" />
          </div>
          <div className="mt-4 flex items-center space-x-6">
            <button className="text-gray-600">Like</button>
            <button className="text-gray-600">Comment</button>
            <button className="text-gray-600">Share</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
            <div>
              <div className="font-bold text-lg">Vitaly Boyko</div>
              <div className="text-sm text-gray-500">I chose a wonderful coffee today, I wanted to tell you what product they have in stock...</div>
            </div>
          </div>
          <div className="mt-6">
            <img src="https://via.placeholder.com/500" alt="Lorem Ipsum" className="w-full h-64 object-cover rounded-xl" />
          </div>
          <div className="mt-4 flex items-center space-x-6">
            <button className="text-gray-600">Like</button>
            <button className="text-gray-600">Comment</button>
            <button className="text-gray-600">Share</button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Stories, Suggestions, Recommendations) */}
      <div className="col-span-4 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="font-bold text-lg text-gray-800">Stories</div>
          <div className="flex space-x-4 mt-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="font-bold text-lg text-gray-800">Suggestions</div>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="font-bold">Nick Shelburne</div>
                <button className="text-blue-500">Follow</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="font-bold">Brittni Lando</div>
                <button className="text-blue-500">Follow</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="font-bold text-lg text-gray-800">Recommendations</div>
          <div className="flex space-x-4 mt-4">
            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white">UI/UX</span>
            </div>
            <div className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center">
              <span className="text-white">Music</span>
            </div>
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-white">Cooking</span>
            </div>
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
              <span className="text-white">Hiking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
