import React from 'react'
import { Badge, Link } from 'lucide-react';
import { Award } from 'lucide-react';
import { Activity } from 'lucide-react';
function Intro() {
  return (
    <>
    <div className="py-16 md:py-24 mx-auto px-4 md:px-6" >
        {/* ============================================== Icon Pack 1 ==================================================*/}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'> 
                     <div className='flex flex-col gap-5'> 
                    {/* ====== icon ====== */}
                    <div className='flex gap-8'> 
                    <div className='rounded-full ml-20 h-20 w-20 flex justify-center items-center bg-black p-3'>
                    <Link className="text-white h-8 w-10"/>  
                    {/* ======= Heading ====== */}
                    </div>
                    <div className='flex items-center text-3xl font-bold'> 
                        
                        <h1 >Refer Your Friends</h1>
                    </div>
                         </div>
                     {/* ======= content ====== */}
                     <div className='flex  ml-20 h-20 font-bold text-lg text-gray-500'>
                        <h1> Share your unique referral link with your friends and family to earn rewards.</h1>
                     </div>
                     </div>
        {/* ============================================ Icon Pack 2 ======================================== */}
        <div className='flex flex-col gap-5'> 
                    {/* ====== icon ====== */}
                    <div className='flex gap-8'> 
                    <div className='rounded-full ml-20 h-20 w-20 flex justify-center items-center bg-black p-3'>
                    <Award className="text-white h-8 w-10"/>  
                    {/* ======= Heading ====== */}
                    </div>
                    <div className='flex items-center text-3xl font-bold'> 
                        
                        <h1 >Refer Your Friends</h1>
                    </div>
                         </div>
                     {/* ======= content ====== */}
                     <div className='flex  ml-20 h-20 font-bold text-lg text-gray-500'>
                        <h1>Earn exciting rewards when your friends sign up using your referral link.</h1>
                     </div>
                     </div>
        {/* =============================================== Icon Pack 3 =============================================== */}
        <div className='flex flex-col gap-5'> 
                    {/* ====== icon ====== */}
                    <div className='flex gap-8'> 
                    <div className='rounded-full ml-20 h-20 w-20 flex justify-center items-center bg-black p-3'>
                    <Activity className="text-white h-8 w-10"/>  
                    {/* ======= Heading ====== */}
                    </div>
                    <div className='flex items-center text-3xl font-bold'> 
                        
                        <h1 >Track Your Progress</h1>
                    </div>
                         </div>
                     {/* ======= content ====== */}
                     <div className='flex  ml-20 h-20 font-bold text-lg text-gray-500'>
                        <h1>Monitor your referrals and earnings in your dashboard.</h1>
                     </div>
                     </div>
                </div>
    </div>
    </>
  )
}

export default Intro