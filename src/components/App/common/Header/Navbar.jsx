import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div
            className="catgrories d_flex"
            style={{
              display: pathname.startsWith('/products') ? 'none' : null,
            }}
          >
            <span className="fa-solid fa-border-all" />
            <h4>
              Categories <i className="fas fa-caret-down" />
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              {/* <li>
                <Link to="/track">Orders</Link>
              </li> */}
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn" />
              ) : (
                <i className="fas fa-bars open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
