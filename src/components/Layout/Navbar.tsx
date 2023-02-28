import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const user = cookies.user && JSON.parse(JSON.stringify(cookies.user));
  return (
    <header className="px-6 md:px-12 py-6 shadow-md">
      <nav className="capitalize flex justify-between ">
        <a href="/" className="font-black">
          todo app
        </a>
        <div>
          {cookies.user ? (
            // if user login
            <div className="flex items-center gap-6">
              <p>{user.email} </p>
              <button
                className="btn"
                onClick={() => {
                  removeCookie("user");
                  navigate("/");
                }}
              >
                logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <a href="/login" className="btn">
                login
              </a>
              <a href="/register" className="btn">
                register
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
