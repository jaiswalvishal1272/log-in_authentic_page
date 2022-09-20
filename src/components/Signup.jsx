import React from "react";

const Signup = () => {

    const handleReset = () => {

    }
    
    const handleSignup = () => {

    }

    return(
        <div>
            <form action="">
                <h3>Signup Form</h3>< br />
                <label htmlFor="name">Name</label>< br />
                <input type="text" id="name" placeholder="Name..." required />< br />
                <label htmlFor="userName">Username</label>< br />
                <input type="text" id="userName" placeholder="Username..." required />< br />
                <label htmlFor="emailid">email-id</label>< br />
                <input type="email" name="emailid" id="emailid" placeholder="abc@xyz.com" required />< br />
                <label htmlFor="pwd">Password</label>< br />
                <input type="password" id="pwd" placeholder="***" required />< br />
                <label htmlFor="cnfpwd" >Confirm Password</label>< br />
                <input type="password" id="cnfpwd" placeholder="***" required />< br />
                <button onClick={ handleReset } >Reset</button>
                <button onClick={ handleSignup } >Signup</button>
            </form>
        </div>
    );
}
export default Signup;