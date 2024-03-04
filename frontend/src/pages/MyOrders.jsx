import { Link } from "react-router-dom"
function MyOders(){
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
                <Link  className="ml-3" to={"/MyAccount"}>My Account</Link>

                </li>
                <li>
                <i className="fa-solid text-3xl ml-5 mt-3 text-green-500 fa-lock"></i>
                <a href="#" className="ml-3">Log Out</a>

                </li>
              </ul>
              <i className="fa-solid text-3xl ml-5 mt-[53%] text-grey-500 fa-copyright"></i>  
               <a className=" ml-2 mb-[20%]"  > Xijaabo 2024.</a>
          
            </div>

            <div className="rightside">
               
                 <h1 className="text-3xl ml-20 mt-20">My Orders</h1>
                 <table >
                    <tr className="tr">
                        <td>Date</td>
                        <td>name</td>
                        <td>Phone</td>
                        <td>Course</td>
                        <td>Price</td>
                        <td>Code</td>

                    </tr>
                    <tr>
                        <td>24/02/2024</td>
                        <td>Madina@gmal.com</td>
                        <td>616676767</td>
                        <td>Html For Profisional</td>
                        <td>20$</td>
                        <td>001</td>

                    </tr>
                   
                   
                 </table>
            </div>
        </div>


    </div>
}
export default MyOders