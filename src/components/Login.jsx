import React from "react";

const Login = () => {

    const handleLogin = () => {

    }

    const handleReset = () => {

    }

    const handleForgetPassword = () => {

    }

    return (
        <div id="container">
            <form action="" >
                <h2>Log-In Authentication Page</h2>
                <label htmlFor="userName">UserName</label>< br />
                <input type="text" id="userName" placeholder="UserName..." required />< br />
                <label htmlFor="Pwd">Password</label>< br />
                <input type="password" name="pwd" id="pwd" placeholder="***" required />< br />
                <button type="submit" onClick={ handleLogin } >Login</button>
                <button type="submit" onClick={ handleForgetPassword } >Forget Password</button>
                <button type="reset" onClick={ handleReset } >Reset</button>
            </form>
        </div>
    );
}
export default Login;