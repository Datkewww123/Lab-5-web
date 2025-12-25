import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/users/123">User 123</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
