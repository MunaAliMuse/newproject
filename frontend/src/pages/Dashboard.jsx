 import { Link } from "react-router-dom"
function Dashboard(){

    return <div>
        <div className="container">
            <div className="leftside">
              <h1 className="text-5xl ml-3 font-bold mt-20">Xijaabo</h1>

              <ul>
                <li>
                <i className="fa-solid text-3xl ml-5 mt-7 text-green-500 fa-home"></i>
                <Link className="ml-3" to={"/Dashboard"}>Dashboard</Link>

                </li>
                <li>
                <i className="fa-solid text-3xl ml-5 mt-3 text-green-500 fa-clock"></i>
                <Link className="ml-3" to={"/MyOders"}>My Orders</Link>


                </li>
                <li>
                <i className="fa-solid text-3xl ml-5 mt-3 text-green-500 fa-user"></i>
                <Link className="ml-3">My Account</Link>

                </li>
                <li>
                <i className="fa-solid text-3xl ml-5 mt-3 text-green-500 fa-lock"></i>
                <Link className="ml-3">Log Out</Link>

                </li>
              </ul>
              <i className="fa-solid text-3xl ml-5 mt-[53%] text-grey-500 fa-copyright"></i>  
               <a className=" ml-2 mb-[20%]"  > Xijaabo 2024.</a>
          

            </div>
            <div className="rightside">
               <h1 className="ml-[10%] mt-12 text-3xl">My Courses</h1>
               <p className="ml-[10%] mt-1 ">Korsooyin ka aad soo enroll garayso ayaad ka arki kartaa halkaa xili kasto oo aad dontid.</p>
               <div className="coursedetail">
                <div className="top">
                    <ul>
                        <li>
                            <Link className=" ml-3 text-[16px]">Course Number</Link><br />
                            <Link className=" ml-4 text-[12px]">615766135</Link>
                        </li>
                        <li>
                            <Link className=" ml-3 text-[16px]"> Date Placed</Link> <br />
                            <Link className=" ml-4 text-[12px]">24/02/1024</Link>
                        </li>
                        <li>
                            <Link className=" ml-3 text-[16px]">Total Amount </Link> <br />
                            <Link L className=" ml-4 text-[12px]">20$</Link>
                        </li>
                    </ul>
                    <Link to="/Videoss" className="btnwatch">Watch Now</Link>
                </div>
                <hr className="mt-4"/>
                <div className="bottom">
                   <div className="boton">
                   <div className="pic">
                        <img src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                    </div>
                    <div className="qoral">
                        <h2>NODE JS FOR PROFISIONAL</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in!</p>
                    </div>
                   </div>
                    <div className="qoralhoos">
                        <h4>Delivered On Sunday/02/2024</h4> 
                        <h4>Watch The Course Now | </h4>
                        <h4>Find Other Courses</h4>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
}
export default Dashboard