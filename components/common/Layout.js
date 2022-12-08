import NavigationBar from '@common/NavigationBar';

/**
 *  Layout
 *
 * @returns @Component
 */
const Layout = ({ children }) => {
  console.log(children);

  return (
    <>
      <NavigationBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
