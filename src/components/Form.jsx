import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios"; 
function Form({handleFun}) {

  const [formData, setformData] = useState({});
  const handleChangeformData = (e) => {
    const { name, value } = e.target;
    setformData((previousData) => ({
      ...previousData,
      [name]: value,
      
    }
  ));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const result = await  axios.post("http://localhost:8000/api/refer", formData)
    if(result){
      handleFun();
      alert("Your referral saved Successfully.  ")
    }
    console.log(result)
   } catch (error) {
    alert("an error occured! please try after sometime. ")
   }
  };
  return (
    <>
      <div className=" flex gap-10 items-center justify-center text-black">
        <div className=" bg-white w-[50%] sm:h-[70%] md:h-[60%] md:w-[100%] pr-5 pb-5  rounded-2xl md:shadow-xl md:shadow-slate-500/50">
          <div className=" flex flex-col gap-10  ">
            <div className="flex flex-col gap-10">
              <div className="mt-5 ml-5 text-black text-2xl font-bold">
                Refer Your Friends
              </div>
              <div className="max-w-92 ml-5 text-gray-500">
                Fill out the form below to refer your friends and earn rewards.
              </div>
            </div>
            {/* ============ Form ============= */}
            <form onSubmit={handleSubmit} 
            className="space-y-5 ">
              {/* Name */}
              <div className="flex flex-col ml-5">
                <label
                  htmlFor="referrerName"
                  className=" text-lg after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700"
                >
                  Your Name
                </label>

                <input 
                onChange = {handleChangeformData }
                  id="referrerName"
                
                  name="referrerName"
                  placeholder="Enter your name"
                  className="h-12 rounded-xl pl-4 border-2 border-gray-400"
                  required
                />
              </div>
              {/* Email */}
              <div className="flex flex-col ml-5">
                <label
                  htmlFor="referrerEmail"
                  className=" text-lg after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700"
                >
                  Your Email
                </label>
                <input 
                onChange = {handleChangeformData }
                  id="referrerEmail"
                  name="referrerEmail"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-xl pl-4  border-2 border-gray-400   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  required
                />
                
              </div>
              {/* Friends name */}
              <div className="flex flex-col ml-5">
                <label
                  htmlFor="refereeName"
                  className=" text-lg after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700"
                >
                  Friend's Name
                </label>
                <input 
                onChange = {handleChangeformData }
                  id="refereeName"
                 name="refereeName"
                  placeholder="Enter your friend's name"
                  className="h-12 rounded-xl pl-4 border-2 border-gray-400"
                  required
                />
              </div>
              {/*  Friends Email */}
              <div className="flex flex-col ml-5">
                <label
                
                  htmlFor="refereeEmail"
                  className=" text-lg after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700"
                >
                  Friend's Email
                </label>
                <input 
                onChange = {handleChangeformData }
                  id="refereeEmail"
                 name="refereeEmail"
                  type="email"
                  placeholder="Enter your friend's email"
                  className="h-12 rounded-xl pl-4 border-2 border-gray-400"
                  required
                />
              </div>
              {/*  Button */}

              <div className="bg-slate-950 flex justify-center relative left-5 h-12 w-36 rounded-lg text-white">
                <button type="submit">Refer Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
