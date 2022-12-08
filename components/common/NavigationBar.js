import React from 'react';
import Link from 'next/link';

/**
 *  NavigationBar
 *
 * @returns @Component
 */
const NavigationBar = () => {
  const [toggleDarkTheme, setToggleDarkTheme] = React.useState(false);

  return (
    <div className=" bg-light-800 dark:bg-dark-800 p-2 ">
      <div className="justify-between px-4 mx-auto max-w-screen-x">
        <div className="flex mx-auto w-full max-w-6xl">
          <div className="w-3/5 px-2">
            <Link href="/" passHref={true}>
              <span className="text-md font-bold">Jumpbangs</span>
            </Link>
          </div>
          <div className="w-2/5 justify-evenly space-x-10">
            <a className="text-md hover:underline cursor-pointer text-light-0">Projects</a>
            <a className="text-md hover:underline cursor-pointer text-light-0">Blogs</a>
            <a className="text-md hover:underline cursor-pointer text-light-0">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
