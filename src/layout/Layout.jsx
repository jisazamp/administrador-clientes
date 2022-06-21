import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-[#1f2f56] px-5 py-10'>
        <h2 className='text-[#e0e8ff] text-4xl text-center font-bold'>
          CRM - Clientes
        </h2>
        <nav className='mt-10'>
          <Link
            className={`nav-link ${
              currentUrl === '/clients' && 'nav-link__active'
            }`}
            to='/clients'
          >
            Clientes
          </Link>
          <Link
            className={`nav-link ${
              currentUrl === '/clients/new' && 'nav-link__active'
            }`}
            to='/clients/new'
          >
            Nuevo cliente
          </Link>
        </nav>
      </div>
      <div className='md:w-3/4'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
