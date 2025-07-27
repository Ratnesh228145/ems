import { useState } from "react";


const Login = () => {
const [email, setEmail] = useState("");
const [password, setpassword] = useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("email is : ",email);
    console.log("password is : ",password);

    setEmail("");
    setpassword("");
  }

    return(
        <div className="flex h-screen w-screen items-center justify-center ">
            <div className="border-2 border-emerald-600 p-20">
                 <form 
                 onSubmit={(e) =>{
                    submitHandler(e)
                 }} className="flex flex-col items-center justify-center">
                    <input value={email}
                           onChange={(e)=>{
                            setEmail(e.target.value)
                           }}
                           required 
                           className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray " 
                           type="email" 
                           placeholder="Enter your email" /> 
                    <input value={password}
                           onChange={(e)=>{
                            setpassword(e.target.value)
                           }}
                           required className="text-black outline-none bg-transparent mt-3 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray " type="password" placeholder="Enter your password" /> 
                    <button className="text-black outline-none border-2 mt-5 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray ">Log in</button>
                 </form>
            </div>
        </div>
    );
}

export default Login;