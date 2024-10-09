import React from 'react';

function FilterButton({ text, active }) {
  return (
    <button
      className={
        `gap-2.5 self-stretch px-5 py-2.5 rounded-[50px] ${
        active ? 'bg-lime-50' : 'bg-white'
      } border border-solid border-stone-900 border-opacity-20`}
    >
      {text}
    </button>
  );
}

export default FilterButton;