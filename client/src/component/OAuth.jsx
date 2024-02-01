import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice"
import {useNavigate} from "react-router-dom"
const OAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let haldleGoogleClick = async () => {
    try {
      let provider = new GoogleAuthProvider();
      let auth = getAuth(app);
      let result = await signInWithPopup(auth, provider);
      let res = await fetch("http://localhost:3000/api/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      let data = await res.json();
      dispatch(signInSuccess(data));
navigate("/")
    } catch (error) {
      console.log("could not sign-in with google", error.message);
    }
  };
  return (
    <button
      onClick={haldleGoogleClick}
      type="button"
      className="bg-red-700 p-3 rounded-lg text-white hover:opacity-95"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default OAuth;
