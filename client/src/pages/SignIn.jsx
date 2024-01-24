import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signInStart,signInSuccess,signInFailure} from "../redux/user/userSlice"
const SignIn = () => {
  let {loading, error} = useSelector((state)=> state.user)
  let [formData, setFormData] = useState({});

  let navigate = useNavigate();
  let dispatch = useDispatch()
  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  let handleSubmit = async (e) => {      e.preventDefault();

    try {
dispatch(signInStart())      
let res = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let data = await res.json();

      if (data !== String && data.success === false) {
   dispatch(signInFailure())
        return;
      }

      dispatch(signInSuccess(data))
      navigate("/");
    } catch (error) {
    dispatch(signInFailure(error.message))
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          className="border p-3 rounded-lg focus:outline-none"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg focus:outline-none"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 rounded-2xl text-white disabled:opacity-80"
        >
          {loading ? "loading" : "home"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        {" "}
        <p>Dont have an account?</p>
        <Link to={"sign-up"}>
          <span className="text-blue-700">Sign up</span>
        </Link>{" "}
      </div>
      { <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
