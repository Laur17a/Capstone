import React from 'react';
import { useState } from 'react';
import '../App.css';
import reel from '../pics/reel.png';



function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
    };



return(<div className="Login">

<h2>Login</h2>

<form>

    <div>
        <input required type="Username" value ={username} placeholder='UserName' onChange={e=>setUsername(e.target.value)}></input>
        <input required type="password" value={password} placeholder='Password'onChange={e=>setPassword(e.target.value)}></input>
    </div>

    <button onSubmit={handleSubmit}>Log In</button>
    
    {/*Add forgot password*/}
</form>


</div>)
}

export default Login;