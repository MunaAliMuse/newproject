
import { useState } from "react"
import { Link } from "react-router-dom"
function MyAccount(){
    const [firstName, setfirstName] = useState("")
    const [lastName,setlastName]= useState("")
    const [password, setpassword] =useState("")
    const [ email, setmail] =useState("")
    const [subjectName, setsubjectName]= useState("")
    
    const handleContact=(e)=>{
        e.preventDefault()
    axios.post("http://localhost:1000/contact",{
        "name": firstName,
        "lastName": lastName,
        "password": password,
        "email": email,
        "subjectName":subjectName
    }).then((Response)=>{
        alert("Contact has been succefull")
        
    }).catch((error)=>{
        console.log(error)
    })
}

  

    return <div>

        <form className="w-[650px] h-[480px] bg-white mt-10 p-5 ml-[20em] rounded-xl shadow-xl shadow-black ">
<h1 className="text-center text-3xl text-white">creat Acount</h1>
              
<input value={firstName} onChange={(e)=>setfirstName(e.target.value)} className="h-10 w-[350px] bg-gray-300 ml-16 border-2 border-gray-500" type="text" placeholder="enter your firstname" />
<br />
<br />
<input value={lastName} onChange={(e)=> setlastName(e.target.value)} className="h-10 w-[350px] bg-gray-300  ml-16  border-2 border-gray-500" type="text" placeholder="enter your lastname" />

<br />
<br />
<input value={email} onChange={(e)=> setmail(e.target.value)} className="h-10 w-[350px] bg-gray-300  ml-16  border-2 border-gray-500" type="text" placeholder="enter your email" />
<br />
<br />
<input value={password} onChange={(e)=> setpassword(e.target.value)} className="h-10 w-[350px] bg-gray-300  ml-16  border-2 border-gray-500" type="text" placeholder="enter your password" />
<br />
<br />
<br />
<br />
<input value={subjectName} onChange={(e)=> setsubjectName(e.target.value)} className="h-10 w-[350px] bg-gray-300  ml-16  border-2 border-gray-500" type="text" placeholder="enter your Subjectname" />

<br />
<br />

<button onClick={handleContact} className="bg-green-500 py-3 px-32 rounded-xl ml-14 text-white">create Accoun</button>

        </form>

    </div>
}

export default MyAccount
