import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

const NarBar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const currentUser = {
    id: 1,
    userName: "Chadie Gil",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Fiber</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiber Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="profile"
              />
              <div>{currentUser?.userName}</div>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add Gigs
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link to="/" className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/" className="link menuLink">
              Graphics & Design
            </Link>
            <Link to="/" className="link menuLink">
              Video & Animation
            </Link>
            <Link to="/" className="link menuLink">
              Writing & Translation
            </Link>
            <Link to="/" className="link menuLink">
              AI Services
            </Link>
            <Link to="/" className="link menuLink">
              Digital Marketing
            </Link>
            <Link to="/" className="link menuLink">
              Music & Audio
            </Link>
            <Link to="/" className="link menuLink">
              Programming & Tech
            </Link>

            <Link to="/" className="link menuLink">
              Business
            </Link>
            <Link to="/" className="link menuLink">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NarBar;
