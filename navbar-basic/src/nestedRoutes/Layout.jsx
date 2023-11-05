import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{ minHeight: '85vh' }}
      className="d-flex align-items-center gap-4 p-5"
    >
      <aside className="bg-white p-5 rounded d-flex flex-column gap-5">
        <NavLink
          className="text-black text-decoration-none"
          to={'/kategoriler/'}
        >
          Hikaye
        </NavLink>
        <NavLink
          className="text-black text-decoration-none"
          to={'/kategoriler/roman'}
        >
          Roman
        </NavLink>
      </aside>

      <Outlet />
    </div>
  );
};

export default Layout;

