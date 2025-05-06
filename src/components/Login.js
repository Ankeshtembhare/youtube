import { useState } from "react";
import Header from"./Header";


 const Login = ()=>{

    const[IsSignin,setIsSignin]=useState(true);

    const togglesignin=()=>{
        setIsSignin(!IsSignin);
    };
    return (
    <div>
        <Header/>
        <div className="absolute">
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg"
            alt="logo"
            />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
            <h1 className="text-3xl font-bold py-4"
            >{IsSignin ? "Sign In" : "Sign Up"}</h1>
             {!IsSignin && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
            />}
            <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
            />
            <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
            />
            <button 
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            >
            {IsSignin ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer"
            onClick={togglesignin}
            >{IsSignin ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now."}</p>
        </form>
    </div>
    )
 };


 export default Login;