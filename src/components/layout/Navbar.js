import React from 'react';

function Navbar() {
  // todo
  return (
    <div className='flex flex-row justify-center bg-gray-200 dark:bg-gray-900'>
      <div className='w-24 p-2 text-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer'>
        Nav Item
      </div>
      <div className='w-24 p-2 text-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer'>
        Nav Item
      </div>
      <div className='w-24 p-2 text-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer'>
        Nav Item
      </div>
    </div>
  );
}

export default Navbar;
