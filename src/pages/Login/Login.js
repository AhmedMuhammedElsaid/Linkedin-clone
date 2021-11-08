import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { auth } from "../../firebase";
import "./Login.css";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("Please Enter a Full Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch(({ message }) => {
        console.log("current error", message);
        alert(message);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log("====================================");
        console.log("userAuth from login", userAuth);
        console.log("====================================");
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.profileUrl,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://images.squarespace-cdn.com/content/v1/504eb270e4b07d0f5698991c/1384968611741-AZNM0P887GMX70AKE4DD/ke17ZwdGBToddI8pDm48kGV8-cLflnALj_RSAgush48UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKchSuNbMUCvuuTZHgWloEEwNyLlayR1yRgyDKngyftov7VknlDOWKg9JqkiIs5JgMT/Linkedin.png"
        alt="LinkedIn Logo"
      />
      <form>
        <input
          placeholder="Full name (Required if Registering)"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile Pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          placeholder="Email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
