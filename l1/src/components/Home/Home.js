import { useState } from "react";
import { Link } from "react-router-dom";
import { login, signUp } from "../../services/firebase";

export const Home = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await login(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }

    setEmail("");
    setPass("");
  };

  return (
    <>
      <h2>{isSignUp ? "SignUp" : "Login"}</h2>
      <Link to={`${isSignUp ? "/" : "/signup"}`}>
        {!isSignUp ? "SignUp" : "Login"}
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={handleChangeEmail} />
        <input type="password" value={pass} onChange={handleChangePass} />
        <button>LOGIN</button>
        {error && <span>{error}</span>}
      </form>
    </>
  );
};