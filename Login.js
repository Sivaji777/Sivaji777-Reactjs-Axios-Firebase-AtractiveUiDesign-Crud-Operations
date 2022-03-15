import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


function Login() {

    const [name, setName]=useState()
    const [password, setPassword]=useState()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    var name1=localStorage.getItem("name")
    var password1=localStorage.getItem("password")
    var x=document.getElementById('exampleInputEmail1').value
    var y=document.getElementById('exampleInputPassword1').value
   
    if(!x){
      document.getElementById('p1').innerText="Enter Username"   
      console.log('one');
    }
    else if(!y){
      document.getElementById('p2').innerText="Enter Password"
      console.log('two');

    }
    else if(name !== name1 && password !== password1)
    {
        document.getElementById('p3').innerText="Incorrect username & Password"
        
      }
      else{
        
        navigate("/task");
    }




  };

  return (
    <div  className="pt-5"  >
    <div className="col-3 m-auto bg-secondary bordered p-3 " >
    <h1 style={{marginLeft:'125px'}} >Login</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">User Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User Name"
              onChange={(e)=>setName(e.target.value)}

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
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <p style={{color:'red'}} id='p2' ></p>
            <p style={{color:'red'}} id='p3' ></p>



          </div>
         
          <button style={{marginLeft:'130px'}}  onClick={handleSubmit} class="btn btn-danger" >button</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
