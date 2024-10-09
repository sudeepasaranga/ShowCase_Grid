import React from 'react';

const CourseCard = ({ title, image, description, price, originalPrice, modules, tags = [] }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-500">${price}</span>
          {originalPrice && originalPrice !== price && (
            <span className="text-sm line-through text-gray-500">${originalPrice}</span>
          )}
        </div>
        <div className="text-gray-600 mt-2">Modules: {modules}</div>
        <div className="flex gap-2 mt-2">
          {tags && tags.map((tag, index) => (
            <div key={index} className="flex gap-1 items-center px-2.5 py-1.5 bg-blue-50 rounded-[50px]">
              <img loading="lazy" src={tag.tag_image_url} className="object-contain w-5 aspect-square" alt={tag.tag_text} />
              <span>{tag.tag_text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;