import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import frontend from "../images/frontend.jpg"
import react from "../images/react.jpg"
import php from "../images/php.jpg"
import nodejs  from "../images/nodejs.jpg"
import mongodb from "../images/mongodb.jpg"



function Home() {

    const [courses, setcourses] = useState([])

    const handleReadCourse = () => {
        axios.post("http://localhost:1000/learning").then((res) => {
            setcourses(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadCourse()
    }, [])

    return <div>

        <div className="bg-cover w-[100%] h-[300px] text-center p-32 ">
        <h1 className="text-white text-3xl  font-bold p-10">LetsGet Skilled.</h1>
       
     <p className="text-white text-center "> aspire to create outstanding academy that promote educational excellence, character development <br /> and service to communities.
     <br />
     <br />
              <button className="bg-green-500 py-2 px-12 rounded hover:bg-yellow-600">Get start</button>

              <button className="bg-green-500 py-2 px-12 rounded ml-10 hover:bg-fuchsia-600">Contact US</button>
              
                </p>
        </div>



        <div>
            <div className="text-center p-12">
                <h1 className="text-green-500 font-bold">WHY YOU CHOOSE XIJAABO ONLINE
                </h1>

                <br />
                <h2 className="ml-12 font-bold">Xijaabo is more than eLearning</h2>
                <br />
                <br />
                <p className="font-sembold">We're committed to changing the future of learning for <br /> the better and provide the tools and skills to teach what you love.

                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
            <div className="w-[300px] h-[210px] bg-slate-100 ml-20 shadow-xl text-center p-y-2 px-8">
            <i  class="fa-solid text-3xl text-center text-green-500 fa-laptop"></i>
                <h1 className="font-bold">Latest Trend Of Technologies</h1>

                <p>Latest Trend Of Technologies
                    In this school, you can find lessons that are compatible with <br /> the modern technologies of web development <br /> and mobile app development</p>
            </div>

            <div className="w-[300px] h-[210px] bg-slate-100 ml-20  shadow-xl text-centerp-y-2 px-8 ">
                <i  class="fa-solid text-3xl text-green-500 fa-laptop"></i>
                <h1 className="font-bold">Latest Trend Of Technologies</h1>
                <p className="  ">Latest Trend Of Technologies
                    In this school, you can find lessons that are compatible with <br /> the modern technologies of web development <br /> and mobile app development</p>
            </div>

            <div className="w-[300px] h-[210px] bg-slate-100 ml-20 p-y-2 px-8  shadow-xl text-center">
            <i  class="fa-solid text-3xl text-green-500 fa-laptop"></i>
                <h1 className="font-bold">Latest Trend Of Technologies</h1>

                <p className="p-y-2 px-8">Latest Trend Of Technologies
                    In this school, you can find lessons that are compatible with <br /> the modern technologies of web development <br /> and mobile app development</p>
                    
            </div>
            <div className="w-[300px] h-[210px] bg-slate-100 ml-20 shadow-xl p-y-2 px-8 text-center">
            <i  class="fa-solid text-3xl text-green-500 fa-laptop"></i>
                <h1 className="font-bold">Latest Trend Of Technologies</h1>

                <p>Latest Trend Of Technologies
                    In this school, you can find lessons that are compatible with <br /> the modern technologies of web development <br /> and mobile app development</p>
            </div>
            <div className="w-[300px] h-[210px] bg-slate-100 ml-20  p-y-2 px-8 shadow-xl text-center">
            <i  class="fa-solid text-3xl text-green-500 fa-laptop"></i>
                <h1 className="font-bold">Latest Trend Of Technologies</h1>

                <p>Latest Trend Of Technologies
                    In this school, you can find lessons that are compatible with <br /> the modern technologies of web development <br /> and mobile app development</p>
            </div>
            <div className="w-[300px] h-[210px] bg-slate-100 ml-20 p-y-2 px-8  shadow-xl text-center">
            <i  class="fa-solid text-3xl text-green-500 fa-laptop"></i>
                <h1 className="font-bold">Latest Trend Of Technologies</h1>

                <p className="font-sembold">Latest Trend Of Technologies
                    In this school, you can find lessons that are compatible with <br /> the modern technologies of web development <br /> and mobile app development</p>
            </div>

        </div>


        <div>
            <h1 className="text-green-500 p-10 text-3xl ml-32 text-center p-y-2 px-8 ">COURSES
            </h1>
            <p className="text-white p-5 text-1xl ml-32"> aspire to create outstanding academy that promote educational excellence, <br /> character development and service to communities.

                Get</p>
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


        <div className="flex justify-around ">

     <div className="p-5 mt-10  m">
   <h1 className="font-bold text-5xl">Learn The Most Powerful <br /> Languages  and frameworks</h1>
   <br />
    <p className="font-semibold">We re committed to changing the future of learning for  <br />the better and provide the tools and skills to teach what you love.</p>
    <br />
    <button className="bg-green-500 py-3 px-16 text-white rounded-xl hover:bg-fuchsia-600">create Acount</button>
    <button  className="bg-green-500 py-3 px-16 text-white rounded-xl hover:bg-fuchsia-600 ml-10">Contact Us</button>

     </div>
     <div className="grid grid-cols-2  ">
     <div className="flex gap-2">
       <img className="h-[120px] w-[150px]  " src="data:image/png;base64,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" alt="" />
        <img className="h-[120px] w-[150px]" src="data:image/png;base64,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" alt="" />
     </div>
     <br />
     <div className="flex gap-2">
       <img className="h-[120px] w-[150px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAzFBMVEX////kTSbxZSnr6+sAAADkRRbocFXkOwDnUifvYCnwVQD4+PjtXCj8/Pybm5vr9fbno5X4t6L5ybn61s3kSiAzMzPMzMzf3992dnZBQUHy8vKCgoLotqzpxsHT09M5OTkSEhJnZ2e5ubnnm42jo6McHByLi4tXV1f98/HxYB4sLCzkUzD75uPvSwDwWg7iKgDysqb1ysLqe2T0jm3lYULnjXvmf2r1wbjr4N7129btiHboaE7zhF/tmIiurq7zf1XydUX2p4vxbDX1l3p76U+aAAALAElEQVR4nO2da1vaShCAwyVEwJTbqi2V1oq20ES5CGpEVPD//6ezQS5LdgYWZqLYw3xpzUOAlyS7b2ZnN5ZlHKmv6bc4u5huOZluSH+ryj/+pOG4DF/+ff7n8eIdv5ypG0+Opn/8/GH+pbYNJpg/qdkb/jiab/ysMOmn6d7ur8W2TwtzdvK299PffwAm/fVtZ/X1nxdm8tXzX6JbPinMkWtZx0fqlk8Mk/5tVZc3fCDMrD1ahvmGwKS/aDB/T46XX/JxMOnLv9NQYazqJPInsxb373l+ukmDSf+MHMYPhNFiAjMNBUbZ+Tu67x5mDxMzzA6IJgnml9LofZ33NZ8U5un3fK/LRWv+SWHOq3OCC+vTw1jn0yvlV8r6CcJ8O3lHmLPvP44n8bQVjPX2gjP5Pxjm8uvvRXyJh2yNm5nDuJP//HYxmKWI6Zxjg7HO5b9/wl/cAObbrsNYf9KXE1n9J2BSl9+tfwbGPf7x78DMYg/DCzO5dVyC+QnBXD4pOy90Rn3L+d3dBOYSgjmKB6Z6/mUas/dPzTZc5IGXXahfY77vUh94MdsaZjlT87/UuEhZsYSbn4Y72zLbkFdfltdeBu6rvzQPxtIO+9jHPvaxj33sYx//4/C9zE6F5xNgGi17p6LVIMC4TmKnwqEotJsQH/391RAJEkzP/mgANewe6eamu1swXQqL1d+pi8bpk2DquwVTJ8G0dwumTYLptD4aQI1WhwRT2S2YCgnG3y0Yis2EPsPyLQ4Ot48DBYZiMxKGpwE4yCa3jawC4xBhPBaf4YERHhEmw6IABJjDxbvYGSLM7S7B3BJheHyGB8YZ0mDc4i7BFGkjAi6PzzDBtInDG3csHQ0PTOuOxsLkM0wwNJuRMB98mi31mVSY4IObZhXGDogwPosCsMAIUtZsAtPbHZgeGYYlpcECY3epMI2Hj4VRbeaBJgASZsjRnLHAUG1GwmA+YzubRG6TaCIwRSoM5jN2t7hJlDaJ5yYMQ7UZ6TMwjNMvbBIbfeQNDEO2GTTZZHdTG0R1k980/7KAUftMYqJpAoOcZoPYYBrXSRDGocNU4E5TiPhgrkAYIahqJuUMUYDWu8P0qGomYZCURus+LpgAhrEzdBjMZ1pBXDAVFUa5Ssk2g/tMqxYXTDkHw5BtBs/POKeFmGBKMIzTZ4BBxpucYlwwIwSmTofBxpucelwwN9cwDG2kaSWMfRsXzAumZgwwd3ADYA/igkkqMGoGgK5mEkaAvabtxQWjXDJJVQA4YDpwSkPYccEgAuDR1Uz2YQw+swkMajN0NdvIZ6rY7Ux+/cfMw0cEgMFmVviMBlOtnSJxVzaPEtwyc9iMhEHGm1q16EVTqGM5tm0TGsw2s8Jn7jSYtiPgYIDhsBnLcpFkk+4zhVMsx8YBM2SZe4LImd3XYGpYjo0DhlYENAskc6b7TDXghlEzAEUWmDZ88oie1mvexwgjONRM+gw2qqHBVOODER6HzUifQRRA95kCd9OsCgCHzayAibKkCthgzu7ABAP4onE0BShggznbwii/3IDDZqQCIHLmBFrbjA3mMMBkOGwGlzOno/sM0gIwwLComVQA5Pe2tfxMAavnYIB54Jl8isLoPlNDSiC2hFE9k1bSvIg+AqP7TMALo2YAhkwwdQRGz8/cxwfDo2ZSzpBRja6eBWix3gKoNsOjZlLOkJSGLmcFcgMwhmGEx6NmqJwJTzswqRoSFeMYIzA8aob6jPCAlIbON9ls/Fm+CqOeBTw2gw6eCS9AvrsOY9xJVBAYJpuRvxYsZxLGNA+4AUwShLEHPAKAFjeLhPEQjTlMGYEhljQvwsUqtWOAKSEwtAlaamBmbzzeZA4zgsczGGEQORNDfphXGEY8sMEMkVtN4/Emc5hHBIZLzaScmfsMEcZ9hEeaElw2I30GvmSEcTGQMUzjGYHhshnUZ+wMO4yvDmgqP1uCy2ZkT4bI2cC05MQYJkBgPI6RprdAiptFz9RnjGEqGAyXAKCTtaT9GbYAxjBlRM2IE7TUcDHTNFUAY5gSJs2Ma2lhMG12GNhmRI+PxcogaVdTn6m6YOgfhNiMGDDCdBGYbptUCqxfCIjNMKoZmmwyr9QGi7Gv9Cbq9RqG4bMZyyoSJwSACY3mWIPJqxVNaqKJz2YsCx15JcE8aqdZA4PhEwC0sokGc32jwfiPYJ+ZsLnSGWFQJ2vBMK8aTPAMwzhc6YwwfOK8ExhmpMEgNpNw+GxGKkAcRyZX0jqa8hg5zVgX00Rh9LyyOYx+VSO5mYTNyWJho+e3xXokwLIhGEbX+hIiAB4rDDJGK0610jKw5IQIY2dYYZBkkz54ljKHaepN1AgRgFtWGGzwrK45Zc0GzkgIpjnWYFwExuG0GbwYqK/BBNAqYiDMi9beNl5hAWApaV4EMvPM7mtZAHDIAIR5NIfhtBl85tmtDgMlpiEYQAD8GzjRxDDbbOljsGl02iyae6itAGF0AQiQrBlxJSBTmIwOAyWmIZjcGpvhWwlICxhG9Gpasgkq6QRhdJvpjJMwDC/LBjBQ/QwIs9pmlJaZHcaB8zPAeBNUPwPClHUYuJsRvGpmWciyjXoxUOp0exh1gpYqAJyJpjCwMq129DSrmsIkATVDYDhzM2FgZefF6IGp1uyWEyXXYJq5K8hmYBjiIo16ID7j1KMwsnGuDb0IzzLMde7qZVTxtcasMUIEgDM3EwY2k36ow0yA2oNWa9FoLGDkIck9lv0GdOv4TjaD+8wDMkRTKKRqfc9x3hx6CtPM5cYjPDfhI2OAzDYjTQPzGXy8qVoo3Le73luJVlPG+Ka8siv338dm0JUOAZ/RDtAw0/PGL4+ltemi97IZbKVD0Vs7X1veSgendybfRy0CWlrVgPtBJy50AxmmGozma5vNOas0QRgh2GE8uBjI1uUMunyMvk4ZEwB2GKQYyD41OTI0mAw7DDKNzuGDcdsIzC07DDbzrM0G00DUjGm2mQqzgc9sC4MlmoiLNAKBrHSI+cw2MMgYIMNKQNHAfcagOTOC8ZHyLHabQX1GCk37fm0JzVqYRsMvqSyx2syKZahtpzUY1oKVQCthXD/ojF6ucspJtrxGUwwwKwbPbMfxboshEFakjcI0gk7pJrm8plnUZmKAWf0kCmE79qDfrt2nCgAQAuNXSqPn6yhI1GYYi4Bm0UCGaJZ5erf10yB05bUwDQly8wKSLMPYgxhgjJZtFLbtDSTQfWHpAEVhGuXRzXPyugmTRASgGwMMVnKi8QhbSKB2UF0coCWYoHTzPG7iIBEYnrnzEZhNnkQRjtN6vX5tdsLNYdzO68s4uRokCsOxElAk3NKGtQAivIZkJyRvzqYwjdLz9YpTC4Ohr2uowyD5mdUhOyF7WLuvuo3Ka+4KudrXwPDbDLo44Ppw5AF6zOVy6xFAGPIqzVAQVm4WtvEhAY5MHDCUYqBNZwOyrtIMwhAeRkWAEV4cMJSVmykw5FWaQRjCkyg2hlnsyjV3PgJDeBLFRjCHhwfqJcOyElA0KE+iMIdZAgkjDpuhLUNtBpONgkxgYrAZ2pMoDGAgkAlMDDZjkR4Tthommz1ESBIx2Qw6eEaCya4ECSOG3EwYW8sZCpMFr5LlYFilGYRh7TSzh1rDBUc8MBWhDYlvC5M1BJG3EIk4PFO2zXfDnrMdjwoTgpiSOL2h0ZjbVjh+pd11WnAdjRGMMYiQH9NtB35cKJNwG36nn9BrMExgTM+t8P7UG3bgYgH+8NsZe5Pjc5DNGnKEx8TOtLeTy/8ALd/FG33zNbAAAAAASUVORK5CYII=" alt="" />
       <img  className="h-[120px] w-[150px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAArlBMVEX///9srEhZljZdmzrCv79hoD5lo0Fqq0VTky28ublmqT9GjRRQkihOkSRoqkJjqDpfpjTh6t32+fXt8+tyr1HIwcbo8eSErnDL38FCiwjj7t7A2bRsoFCEuGmkyZK61a3w7++rzJ2hw5HS5MpVoCV5slrb6dWqxp2+07TR4MuWwYF2pl7I2cCQvnlim0O1zaqNrnyNtHuXsIipuZ+2vbB3oGF+o2tQoRTk4uPRz8+PjoqLAAAEBElEQVR4nO3bi1baQBAGYDKmzUIuWBAkKHgJoS22FJVWfP8XKwFUsjuzouc4s+e4/xN8Zy+zl2waDR8fHx8fHx8fH5/Pl6IvLSBydS0tIDKKO9IENMVEOdlk/TIC+CatMNMvW8FReirNMDJdu4IjiF1rsqKdBRVMnbs1/gdZFGxgkDjVmWeTjauCQezQzBy0tq4NDFJnZIPjnWsLg9wR2TR6cu1gkH6XNlUZBlmgwSD/Ia1ap6pfOgySn9KsxqwdIDDIpQvt2XGAwtR5V9Q1nAQ4DNIbSVdnlFEwiCWn5rjWkXUYpHJTc6i56jAFUuu53pEaTG49P9MbTINB8kvE1ZnoLh0GSqRmjNuvwkQ2GlODZcJACSxNM7PBTJjA+O8+HNJikLOP/3HrIJg6Z3YNT6KDYJAw1/8Lo4YRMHXDW//bWINhMMhZJ+YAbTAUplj3P7/1VZKGgZryufChT8ASxvJvLt8WGMz5Vkxjv2OFxWwVA9lX2GB8RZaYkxQMEq6z3IzoSRLGdC7plPicJGHqlKf6YzsxKwxSnr6kigUNi/+wwNAdjxXGtCyV1NgnYcDzyYSqYhZYyrHFGL4DxlIw6LFPwxTHoYQe+xYYx3UZsRezwkAxVLIRVfdtMIYNdpdckGwwhq1Pn9i92mEMtxj0ShkEX0gYw11BQTeYbfB//GZxQFcLCwzUx8OQW57XuxLizwsrLF0pC7MMflEYdQoXh9kKrCjMtiSJwujDmzDMtruwwD6+wNr2YzSM4/7CsoMVXcSJe+FXYBwfb6bvgXGcxbv08Y2Gcdxdk9d21sHPca1Cl34SxvPaYUZOy68kjOWGjJ6WJIznSp3eKpKwlOXrIL3xoWE8d53kaknB1JzF1big+pKCcb10I0ssBWN7HTsiCgYB4/uYSn0aIWBcHyDoXSwF4/v8doUPfxzG+Y2XWMhxGOtXcf1JmwXG+44AP12iMOaXF+gow7uS1YW/vMBgMffrHqyWITDulyoN9HyJwAQeN/fNh1omTOQBpbmTNWAyT06N56ZRqcNSnk+7hqxVn5mthdJctyIuY2Zmd6nWkWJP1K9qsuxegzG+g9Izqi0Ay3jflcsMsG32J0B0Eu63GOfzLCTdl6UpKsP5nou/5NfTD55k2U3493lacp3YLJk+/S+V3fYWyfOEdOB/3mJXzrJF716JF4r9FNs2y+57y/nOJf33zy7TqJqb2TLs/auaLJk785PlMFgfgaMwDJf5emvI9FzsoHRGrajshWHvLhWuX3o644fFGhaGd/K/vWm5WFaucCXtMLNxPUorkKwcbbDGZTMMm5fSCiwVzKFK8ZJ1TzalDWgeXYWtmh72trgLc3WMXXrYG+Nhb8/Kxc2Fj4/Pp8h/ld9ICURc09sAAAAASUVORK5CYII=" alt="" />
      
       </div>

     
     </div>
        </div>



    
    </div>
}

export default Home
