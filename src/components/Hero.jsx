import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Form from "./Form"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    p: 4,
  };

  function Hero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <>
    <div className=' w-full py-40 md:py-72 bg-gradient-to-r from-blue-600 to-blue-200 mx-auto flex flex-col items-center justify-center gap-8 '>
      {/* mid text */}

      <div className="max-w-3xl flex flex-col gap-10 text-center absolute md:-translate-y-20">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Earn Rewards by Referring Your Friends
              </h1>
              <p className="mt-4 text-lg text-white md:text-2xl">
                Invite your friends and earn exciting rewards when they sign up.
              </p>
            </div>
              {/* button */}

          <div className="-translate-y-[-150px]">
          <Button
          id = "btn"
          onClick={handleOpen}
  className="relative inline-flex h-20 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none w-[220px] "
>
  <span
    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg pl-8 py-6 bg-slate-950 px-5 text-xl font-medium text-white backdrop-blur-3xl gap-2 undefined"
  >
    Refer Now
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
      ></path>
    </svg>
  </span>
</Button>
{/* Form */}
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
   <Form handleFun ={handleClose}/>
        </Box>
      </Modal>

          </div>
            
    </div>
    </>
  )
}

export default Hero