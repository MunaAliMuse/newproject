import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Login(){

    const Navigate =  useNavigate()
 
    const [password, setpassword] = useState("")
    const [email , setmail] = useState("")

    const handleLogin=(e)=>{
        e.preventDefault()

    axios.post("http://localhost:1000/users/login",{
        "email": email,
        "password": password,
    }).then((res)=>{
        console.log(res.data)

        if(res.data.error){
            alert("Incorrect email or password")
        }
    else {
        alert("Successfully login")
        localStorage.setItem("user", JSON.stringify(res.data))
        Navigate("/Dashboard")
    }
      

    }).catch((error)=>{
        console.log(error)
    })
}
    
    return <div>

        <div className="ml-[26em] px-12 mt-32">
            <form className="w-[300px] h-[350px] bg-green-500 text-center p-4 rounded-xl shadow-10 shadow-black">
            <h1 className="text-center text-5xl mt-3 mb-5 text-white">Login</h1>

                <input value={email} onChange={(e)=>setmail(e.target.value)} className="h-10 w-[99%] "  type="text" placeholder="Enter Your Email......" />
                <br />
                <br />
                <input  value={password} onChange={(e)=>setpassword(e.target.value)}  className="h-10 w-[99%] " type="text" placeholder="Enter Your Password......." />
               <br />
               <br />
                <button onClick={handleLogin} className="p-5 rounded-xl px-16 py-2 mt-5 bg-black text-white">Loging</button>
            </form>
        </div>
    
    </div>
}

export default Login