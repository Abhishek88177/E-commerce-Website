import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../context/LoginContext";

const Login=()=> {

    const {loginAsUser} = useContext(LoginContext);
    const navigate = useNavigate();

  const [login , setLogin] = useState({
    email : "",
    password : ""
  }) 

  const [message , setMessage] = useState("");

  const {email ,password} = login;

  const handleOnChange=(e)=>{
      setLogin({
        ...login , [e.target.name] : e.target.value
      });
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    console.log(login)

    const userDataPre ={
      email : "abhi@gmail.com",
      password : "abhishek"
    } 

  if(login.email === userDataPre.email && login.password === userDataPre.password){
    loginAsUser(login);
    navigate('/');
  }else{
    // loginAsUser(null);
   
    navigate('/login');
    // document.getElementById("message").innerHtml = "User Not Found";
    setMessage("User Not Found");
  }
  }

    return (
     
<>

<form className="col-md-7 mx-auto my-5" onSubmit={submitHandler}>

<p id="message" className="h2">{message}</p>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" name="email" value={login.email} onChange={handleOnChange}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" name="password" value={login.password} onChange={handleOnChange}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>
      
    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</>
    )
  }
  
  export default Login;