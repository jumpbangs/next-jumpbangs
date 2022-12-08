import Link from 'next/link';
import { Menu } from 'react-feather';

import ThemeToggler from 'components/themeToggler';

/**
 *  NavigationBar
 *
 * @returns @Component
 */
const NavigationBar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 shadow-lg border-none bg-light-800 dark:bg-dark-800">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-light-0">Jumpbangs</a>
        </div>

        {/* Tabs */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-md hover:underline cursor-pointer text-light-0">Projects</a>
            </li>
            <li>
              <a className="text-md hover:underline cursor-pointer text-light-0">Blogs</a>
            </li>
            <li>
              <a className="text-md hover:underline cursor-pointer text-light-0">Contact Me</a>
            </li>
            <li>
              <ThemeToggler />
            </li>
          </ul>
        </div>

        <div className="flex-none block lg:hidden">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
            <Menu size={20} color="white" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
