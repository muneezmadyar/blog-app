import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleCreateBlogClick = () => {
    if (!user) {
      alert("Please login to create a blog");
      navigate("/sign"); // Redirect to sign-in page
    } else {
      navigate("/create-blog");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-20 bg-white">
        <a href="/">
          <img className="w-full h-7" src={assets.logo || "/placeholder.svg"} alt="Logo" />
        </a>

        <div className="flex justify-center items-center">
          <ul className="hidden md:flex gap-7 text-black">
            <li>
              <a href="/Blog" className="cursor-pointer hover:text-hcolor">
                Blog
              </a>
            </li>
            <li>
              <a href="#About" className="cursor-pointer hover:text-hcolor">
                About
              </a>
            </li>
            <li>
              <a href="#" className="w-12">
                <img className="cursor-pointer w-6 h-6" src={assets.search_icon || "/placeholder.svg"} alt="" />
              </a>
            </li>
            <li>
              <button
                onClick={handleCreateBlogClick}
                className="cursor-pointer hover:text-hcolor bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                + Create Blog
              </button>
            </li>
          </ul>

          <Link to={"/contact"}>
            <button className="hidden md:block bg-hcolor px-8 py-2 ml-3 rounded-lg text-white cursor-pointer">
              Contact Us
            </button>
          </Link>

          {user ? (
            <button
              onClick={handleSignOut}
              className="hidden md:block bg-red-500 px-8 py-2 ml-3 rounded-lg text-white cursor-pointer hover:bg-red-600 transition-all"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/sign"}>
              <button className="hidden md:block bg-green-500 px-8 py-2 ml-3 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-all">
                Signup
              </button>
            </Link>
          )}

          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon || "/placeholder.svg"}
            className="md:hidden w-7 filter invert cursor-pointer"
            alt=""
          />
        </div>
      </div>

      {/* --------mobile-menu----------- */}
      <div className={`${showMobileMenu ? "fixed w-full" : "h-0 w-0"} fixed right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon || "/placeholder.svg"}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py2 rounded-full inline-block">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py2 rounded-full inline-block">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py2 rounded-full inline-block">
              <img className="cursor-pointer w-6 h-6" src={assets.search_icon || "/placeholder.svg"} alt="" />
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                handleCreateBlogClick();
                setShowMobileMenu(false);
              }}
              className="bg-blue-500 text-white px-8 py-2 ml-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              + Create Blog
            </button>
          </li>

          <li>
            <Link to="/contact" onClick={() => setShowMobileMenu(false)}>
              <button className="bg-hcolor px-8 py-2 ml-3 rounded-lg text-white cursor-pointer">Contact Us</button>
            </Link>
          </li>

          {user ? (
            <li>
              <button
                onClick={() => {
                  handleSignOut();
                  setShowMobileMenu(false);
                }}
                className="bg-red-500 px-8 py-2 ml-3 rounded-lg text-white cursor-pointer hover:bg-red-600 transition-all"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              <Link to="/sign" onClick={() => setShowMobileMenu(false)}>
                <button className="bg-green-500 px-8 py-2 ml-3 rounded-lg text-white cursor-pointer hover:bg-green-600 transition-all">
                  Signup
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
