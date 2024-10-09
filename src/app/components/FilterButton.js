import React from 'react';

function FilterButton({ text, active }) {
  return (
    <button
      className={`flex items-center gap-2.5 self-stretch px-4 py-2 rounded-full transition duration-200 ease-in-out 
        ${active ? 'bg-lime-50' : 'bg-white'} 
        border border-solid border-stone-900 border-opacity-20 
        hover:bg-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-300`}
    >
      {text}
    </button>
  );
}

export default FilterButton;
