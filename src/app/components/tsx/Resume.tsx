import React from 'react'

export default function Resume() {
  return (
    <div className='my-10'>
      <div
        className=" rounded-full border-4 py-1 w-fit flex flex-row gap-4 justify-center px-4 heading"
        id="reusme-heading"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>
        <span className="text-3xl">Resume</span>
      </div>
      <div className='flex justify-center'>
        <a href="https://drive.google.com/file/d/1fB3SRiMaHDj9D9vXxyJxysZPlyypycVC/view?usp=sharing" target='_blank'>
        <button
                className="bg-green-600 text-white w-fit text-xl px-10 py-2 rounded-full"
            
              >Download</button>
        </a>
      </div>
      <hr className='my-10'/>
    </div>
  )
}
