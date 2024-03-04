


function Html(){


  const user = localStorage.getItem("user")


  const verifyUser = ()=> {
    if(!user){
      alert("ceate account")
    }
  }

    return <div>

        <div className="bg-courseTitle w-[100%] h-[480px]" >
          <div className="content">
          <h1 className="text-white text-2xl font-bold p-10 ml-20">HTML FOR PROFISIONAL </h1>
            <p className="text-white ml-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, deleniti! Lorem  <br /> consectetur adipisicing elit. Distinctio, ab! Maiores repudiandae  Lorem ipsum <br /> rem aperiam, reiciendis facilis ad. Laudantium, atque consequatur. Lorem.
            </p>
            <h4 className="ml-20 text-white text-3xl">Last Updated: 25/02/2024</h4>
           <div className="tit-profileUploader">
            <img src="" alt="" />
           <div className="profileUploader"></div> <h2>muna mahamed</h2>
           <div className="coursePrifile">
            <div className="video" controls="https://www.youtube.com/watch?v=kUMe1FH4CHE&t=8s">
            
              <iframe width="380" height="245"
               src="">
              
             </iframe>
             <h2>This Course Includes</h2>
            <div className="list">
            <i className="fa-solid text-3xl ml-5 mt-5 text-green-500 fa-chalkboard"></i>
             <h3 className="mt-6 ml-2">10 Hours and 30 minutes Of HD Videos</h3>
             </div>
             <div className="list">
            <i className="fa-solid text-3xl ml-5 mt-5 text-green-500 fa-user"></i>
             <h3 className="mt-7 ml-3">Exclusive Course For LifeTime Access</h3>
             </div>
             <div className="list">
            <i className="fa-solid text-3xl ml-5 mt-5 text-green-500 fa-certificate"></i>
             <h3 className="mt-6 ml-2">Certified Copmletion</h3>
             </div>
             <Link to="/loging">
             <button onClick={verifyUser}  className="btn" type="button">Enroll Now</button>
             </Link>
            

            </div>
         </div>
           </div>
</div>

        </div>
       
    </div>
}

export default Html