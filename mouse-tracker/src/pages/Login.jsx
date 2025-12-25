import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const usernameRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <input ref={usernameRef} type="text" placeholder="Username" />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
