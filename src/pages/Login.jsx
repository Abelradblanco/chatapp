import { useEffect } from "react";
import {UserAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  //get current user
  const{currentUser, signinWithGoogle} = UserAuth();
  console.log(currentUser)
  
  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser){
      navigate("/chat")
    }
  }, [currentUser]) //if we have dependency current user redirect to /chat route

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Login</h1>
          <p className="mb-5">
            Join the conversation, meet new people, and make 
            connections that will last for a life time
          </p>
          <button onClick={handleLogin} className="btn">Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
