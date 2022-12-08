import Footer from '@common/Footer';
import NavigationBar from '@common/NavigationBar';
import ThemeToggler from 'components/themeToggler';

/**
 *  Layout
 *
 * @returns @Component
 */
const Layout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavigationBar />
        <div className="bg-light-200 dark:bg-dark-200">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
          <Footer />
        </div>
      </div>

      {/* Side Drawer Menu */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-light-800 dark:bg-dark-800 text-base-content">
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
    </div>
  );
};

export default Layout;
