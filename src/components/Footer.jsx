import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-gray-100'>
         {/* =========== Section 1 =============== */}
        <div className='bg-gray-100 py-16 md:py-24'>

        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Refer Your Friends, Earn Rewards</h2>
                <p className="mt-4 text-muted-foreground">
                  Our Refer & Earn program is a great way to share our platform with your friends and earn exciting
                  rewards in the process. Invite your friends, and you'll both receive special offers and bonuses when
                  they sign up.
                </p>
                <a href="#btn">


                <button className="mt-6 bg-slate-950 flex justify-center h-12 w-36 rounded-lg text-white items-center text-lg">Refer Now</button>


                </a>
              </div>
            </div>
          </div>
        </div>
         {/* =========== Section 2 =============== */}
         <div className="bg-gray-100 text-gray-500 font-bold">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6 pb-8">
          <p className="text-sm">&copy; 2024 Acme Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer