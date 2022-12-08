import React from 'react';
import { Sun, Moon } from 'react-feather';

import { useTheme } from 'next-themes';

/**
 *  ThemeToggler
 *
 * @returns @Component
 */
const ThemeToggler = () => {
  const { setTheme } = useTheme();
  const [isDarkTheme, setToggleDarkTheme] = React.useState(false);

  React.useEffect(() => {
    if (isDarkTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isDarkTheme, setTheme]);

  return (
    <>
      <label className="swap swap-rotate">
        <input type="checkbox" onClick={() => setToggleDarkTheme(!isDarkTheme)} />

        {isDarkTheme ? <Moon color="white" /> : <Sun color="yellow" />}
      </label>
    </>
  );
};

export default ThemeToggler;
