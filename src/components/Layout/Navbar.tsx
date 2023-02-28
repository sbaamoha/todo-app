const Navbar = () => {
  return (
    <header className="px-6 md:px-12 py-6 shadow-md">
      <nav className="capitalize flex justify-between ">
        <a href="/" className="font-black">
          todo app
        </a>
        <div>
          {!true ? (
            // if user login
            <div className="flex gap-6">
              <p>username from cookies</p>
              <button className="btn" onClick={() => "clear the cookies"}>
                logout
              </button>
            </div>
          ) : (
            <div className="flex gap-6">
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
