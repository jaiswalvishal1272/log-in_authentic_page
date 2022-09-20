import React from "react";

import NavBar from "./NavBar"
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";

const App = () => {
    return(
        <>
            < NavBar />
            < Login />
            < Signup />
            < ForgetPassword />
        </>
    );
}
export default App;