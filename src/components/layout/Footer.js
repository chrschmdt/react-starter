import React from 'react';

function Footer() {
  return (
    <div className='flex flex-row justify-center bg-gray-200 dark:bg-gray-900'>
      <div className='w-28 p-2 text-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer'>
        Footer Item
      </div>
      <div className='w-28 p-2 text-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer'>
        Footer Item
      </div>
      <div className='w-28 p-2 text-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer'>
        Footer Item
      </div>
    </div>
  );
}

export default Footer;
