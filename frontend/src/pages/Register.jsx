import { useState ,} from "react"
import axios from "axios"
function Register(){

    const [name, setname] = useState("")
    const [password, setpassword] =useState("")
    const [ email, setmail] =useState("")

    const handleRegister=(e)=>{
        e.preventDefault()
    axios.post("http://localhost:1000/registers",{
        "name": name,
        "password": password,
        "email": email,
    }).then((Response)=>{
        alert("Register has been succefull")
        
    }).catch((error)=>{
        console.log(error)
    })
}


    return <div>
    <h1 className="text-center text-4xl">this is from register</h1>

<div className="  ml-[27em] text-center mt-20">
<form className="h-[350px] w-[370px] bg-green-500 text-center rounded-xl  shadow-xl shadow-black"> 
<input value={name} onChange={(e)=>setname(e.target.value)} className="h-10 w-[200px] mt-5 border-2 border-[#0C2D57]" type="text" placeholder="enter your username " />

<br />
<br />
<input value={password} onChange={(e)=>setpassword(e.target.value)} className="h-10 w-[200px] border-2 border-red-400" type="password"   placeholder="enter your password" />
<br />
<br />
<input value={email} onChange={(e)=>setmail(e.target.value)}  className="h-10 w-[200px] border-2 border-green-400 " type="text" placeholder="enter your email" />
<br />
<br />
{/* <input className="h-10 w-[200px] border-2 border-orange-400" type="text" placeholder="enter your phone" /> */}
<br />
<br />
<button onClick={handleRegister} className="bg-yellow-600 text-white px-10 py-2 2rounded-xl">save</button>

</form>
</div>
</div>
}


export default  Register