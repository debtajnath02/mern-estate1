import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-8xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">mern auth</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/sign-up">
            <li>SignUp</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/sign-in">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
