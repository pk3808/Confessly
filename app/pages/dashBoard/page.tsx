import React from 'react';
import feedData from '../../jsonData/confession.json';

const Page = () => {
  return (
    <div className="space-y-6">
      {feedData.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-2xl shadow-xl w-full">
          <div className="flex items-center space-x-4">
            <img
              src={post.user.profile_icon}
              alt={post.user.pseudonym}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-lg">{post.user.pseudonym}</div>
              <div className="text-sm text-gray-500">{post.text}</div>
            </div>
          </div>
          {post.image && (
            <div className="mt-6">
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          )}
          <div className="mt-4 flex items-center space-x-6">
            <button className="text-gray-600">Like ({post.reactions})</button>
            <button className="text-gray-600">Comment ({post.comments})</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
