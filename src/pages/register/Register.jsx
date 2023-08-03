import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios"
import {
  useNavigate
} from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  })
   

  const [err, setErr] = useState(null)
  const navigate = useNavigate()
  const handleChange =e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  };

  const handleClick= async e=>{
    setInputs(null)

    e.preventDefault() // I don't want to refresh my page

    
    try{
     await axios.post("http://localhost:8080/api/auth/register",inputs)
     navigate("/")
    }catch(err){
      setErr(err.response.data)
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SSF.</h1>
          <p>
            SSF is a online portal where you can register yourself and save your montly and get loan easily with single click
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email"  name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick} >Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
