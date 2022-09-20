import React from "react";

const ForgetPassword = () => {

    const handleReset = () => {

    }

    const handleSubmit = () => {

    }

    return(
        <div>
            <form action="">
                <h3>Forget Password</h3>
                <label htmlFor="userName">UserName</label>< br />
                <input type="text" id="name" placeholder="Name..." required />< br />
                <label htmlFor="emailid">email-id</label>< br />
                <input type="email" name="emailid" id="emailid" placeholder="abc@xyz.com" required />< br />
                <button type="reset" onClick={ handleReset } >Reset</button>
                <button type="submit" onClick={ handleSubmit } >Submit</button>
            </form>
        </div>
    );
}
export default ForgetPassword;