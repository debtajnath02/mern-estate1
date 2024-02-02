import React from "react";
import { Link } from "react-router-dom";
import{FaSearch} from "react-icons/fa"
import {useSelector} from "react-redux"
const Header = () => {
  let {currentUser} = useSelector(state => state.user)
   console.log(currentUser);
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-8xl mx-auto p-3">



        <Link to="/">
          <h1 className="font-bold">mern auth</h1>
        </Link>

<form action="" className="bg-slate-100 p-3 rounded-lg flex item-center">
  <input type="text" className="bg-transparent focus:outline-none"/>
  <FaSearch className="text-slate-600"/>
</form>
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
          <Link to="/profile">

{currentUser ? 
<img src={currentUser.avatar} alt="fdjgjmyghb" className="h-7 w-7 rounded-full" />
:             <li>SignIn</li>
}
           
          </Link>
        </ul>
      </div>
    </div>

  );
};

export default Header;
