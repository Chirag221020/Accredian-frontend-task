import React from 'react'





function Navbar() {
  return (
    <>
          <div className=" w-full h-20 flex justify-center items-center text-white bg-gray-100">
            {/* =============== Navbar ========== */}
            <div className="hidden w-auto h-auto md:flex text-lg font-bold text-black">
            <nav className=" gap-8 flex py-4 shadow-sm text-center">
                      <a href="#"> <h1>Features</h1></a>
                      <a href="#"> <h1>Pricing</h1></a>
                      <a href="#"> <h1>About</h1></a>
                      <a href="#"> <h1>Contact</h1></a>
                      </nav>
            </div>
             {/* =============== Get Started Button ========== */}

             <div className="bg-slate-950 flex justify-center absolute right-8 h-12 w-36 rounded-lg">
              <button className="bg-slate-950 ">
                Get Started
              </button>
             </div>
                
          </div>
    </>
  )
}

export default Navbar