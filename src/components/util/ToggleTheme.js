import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeContext';

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div
      className='
        transition-color fixed w-10 h-10 bottom-4 right-4 rounded-full
        flex flex-col select-none justify-items-center bg-gray-300
        dark:bg-gray-700 text-gray-50 dark:text-gray-300 cursor-pointer'
      onClick={toggle}
    >
      <div className='text-center flex flex-col justify-center h-full'>
        <span className='leading-none text-2xl translate-y-[1px]'>☀︎</span>
      </div>
    </div>
  );
}

export default ToggleTheme;
