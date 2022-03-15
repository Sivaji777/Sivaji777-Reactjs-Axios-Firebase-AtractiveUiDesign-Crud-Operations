import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [name, setName]=useState()
  const [password, setPassword]=useState()
  console.log(name, password);

  const handleSubmit = () => {
    localStorage.setItem("name",name)
    localStorage.setItem("password",password)
    var x=document.getElementById('exampleInputEmail1').value
    var y=document.getElementById('exampleInputPassword1').value

  //  if(x && y){
  //   navigate("/login");
  //  }
  //  else {
  //     document.getElementById('p1').innerText="Enter Username"
  //     document.getElementById('p2').innerText="Enter Password"


  //  }

  if(!x){
    document.getElementById('p1').innerText="Enter Username"   
    console.log('one');
  }
  else if(!y){
    document.getElementById('p2').innerText="Enter Password"
    console.log('two');

  }
  else if(!x && !y)
  {
      document.getElementById('p3').innerText="Incorrect username & Password"
      
    }
    else{
    navigate("/login");

  }


  };

  return (
    <div className="pt-5" >
      <div  className="col-3 m-auto bg-primary p-3 ">
        <h1  style={{marginLeft:'70px'}}>Register Page</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Usern Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User Name"
              onChange={(e) => setName(e.target.value)}
            />
            <p style={{color:'red'}} id='p1' ></p>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}

            />
            <p style={{color:'red'}} id='p2' ></p>

          </div>

          <button style={{marginLeft:'130px'}}  type="submit" onClick={handleSubmit} class="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
