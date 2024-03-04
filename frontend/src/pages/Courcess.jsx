
import { Link } from "react-router-dom"
import frontend from "../images/frontend.jpg"
import react from "../images/react.jpg"
import php from "../images/php.jpg"
import nodejs  from "../images/nodejs.jpg"
import mongodb from "../images/mongodb.jpg"

function Courcess(){

    return <div>

 <div className="bg-courcess w-[100%] h-[400px]" >
 <div className="con" > 
            <h1 className="text-3xl p-5 py-2 px-12 ml-20 text-white">Courcess</h1>
            <p className="text-2xl p-5 py-6 x-12 text-white" >We re committed to changing the future of learning for the better and provide <br /> the tools and skills to teach what you love.</p>

         </div>
         </div>
  <div className="h-[150px] w-[300px] text-center ml-[24em] mt-10 ">
    <h2 className="text-2xl text-green-300">Courcess</h2>
    <br />
    <h2 className="text-2xl font-bold">Papular courcess</h2>
    <br />
    <p>the best Course learn any time any where</p>
  </div>
  

  <div className=" allcourse grid grid-cols-3 gap-5 p-5">
        <Link to={"/OrderOne"}>

       <div className="w-[350px] h-[350px] bg-slate-100 rounded shadow-xl  ">
       <img className="w-[350px] h-[200px] rounded" src={nodejs} alt="" />
      <div className=" justify-between">
      <h1 className="font-bold text-2xl ml-7">Node JS Course</h1>
      <span className="bg-green-500 ml-7 rounded p-1 text-white mt-2">Web development</span>

      </div>
       <p className="p-y-2 px-8 font-[2px] font-semibold pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ipsum!</p>

       </div>
       </Link>
       <div className="w-[350px] h-[350px] bg-slate-100 rounded shadow-xl ">
       <img className="w-[350px] h-[200px] rounded" src={mongodb} alt="" />
       <div className=" justify-between">
       <h1 className="font-bold text-2xl ml-7">MongoDB Course</h1>
       <span className="bg-green-500 ml-7 rounded p-1 text-white mt-2">Web development</span>

      </div>
       <p className="p-y-2 px-8 font-semibold pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ipsum!</p>
       
       </div>

       <div className="w-[350px] h-[350px] bg-slate-100 rounded shadow-xl">
       <img className="w-[350px] h-[200px] rounded" src={nodejs} alt="" />

       <div className=" justify-between">
       <h1 className="font-bold text-2xl ml-7">Node JS Course</h1> 
       <span className="bg-green-500 ml-7 rounded p-1 text-white mt-2">Web development</span>
      </div>
       <p className="p-y-2 px-8 font-semibold pb-10">waxa u diyaar ah macalimin profinal ah!</p>
       


       </div>




        </div>

        <div className="grid grid-cols-3 gap-5 p-5">
        <Link to={"/OrderOne"}>

       <div className="w-[350px] h-[350px] bg-slate-100 rounded shadow-xl  ">
       <img className="w-[350px] h-[200px] rounded" src={php} alt="" />
      <div className=" justify-between">
      <h1 className="font-bold text-2xl ml-7">PHP Course</h1> 
       <span className="bg-green-500 ml-7 rounded p-1 text-white mt-2">Web development</span>
      </div>
       <p className="p-y-2 px-8 font-semibold pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ipsum!</p>

       </div>
       </Link>
       <Link to={"/Java"}>
       <div className="w-[350px] h-[350px] bg-slate-100 rounded shadow-xl  ">
       <img className="w-[350px] h-[200px] rounded" src={frontend} alt="" />
      
       <div className=" justify-between">
      <h1 className="font-bold text-2xl ml-7">FrontEnd Course</h1> 
       <span className="bg-green-500 ml-7 rounded p-1 text-white mt-2">Web development</span>
      </div>
       <p className="p-y-2 px-8 font-semibold pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ipsum!</p>
       
       </div>
       </Link>
       <Link to={"/OrderTwo"}>
       <div className="w-[350px] h-[350px] bg-slate-100 rounded shadow-xl ">
       <img className="w-[350px] h-[200px] rounded" src={react} alt="" />
       <div className=" justify-between">
      <h1 className="font-bold text-2xl ml-7">React Course</h1> 
       <span className="bg-green-500 ml-7 rounded p-1 text-white mt-2">Web development</span>
      
      </div>
       <p className="p-y-2 px-8 font-semibold pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, ipsum!</p>
       


       </div>

       </Link>


        </div>
    
    </div>
}

export default Courcess