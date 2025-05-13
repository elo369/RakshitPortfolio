import { IconLink } from '@tabler/icons-react'
import React from 'react'

const Others = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12">    
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative inline-block ">
        <span
          className=" bg-gradient-to-b from-violet-600 via-violet-600 to-gray-900 text-transparent bg-clip-text
"
        >
          Others
        </span>
      </h2> 
      <div>
        <div className='relative py-5'>
            <h1 className='bg-gradient-to-b from-white via-white to-gray-900 text-transparent bg-clip-text text-5xl'>Certifications</h1>
            <li className='text-white py-5'>
                <a href="https://learn.microsoft.com/en-us/users/rakshitkharb-5224/credentials/83c50143c19e6492" className='text-2xl' target='_blank'>Microsoft Certified: Azure Data Scientist Associate</a> <span className="inline-block relative top-1"><IconLink/></span>
            </li>
        </div>
        <div className='relative py-5'>
            <h1 className='bg-gradient-to-b from-white via-white to-gray-900 text-transparent bg-clip-text text-5xl'>research papers</h1>
            <div className='text-white py-5'>
                <p className='text-2xl'>Air Quality Prediction Using a Multioutput LSTM Model [currently working]</p>
            </div>
        </div>
        <div className='relative py-5'>
            <h1 className='bg-gradient-to-b from-white via-white to-gray-900 text-transparent bg-clip-text text-5xl'>Blogs</h1>
            <li className='text-white py-5'>
                <a href="https://medium.com/@rakshitkharb2323/all-about-key-value-pair-and-compression-cbf0a3b36e2b"  className='text-2xl' target='_blank'>Key-Value Pair and Compression</a> <span className="inline-block relative top-1"><IconLink/></span>
            </li>
            <li className='text-white py-5'>
                <a href="https://medium.com/@rakshitkharb2323/gpt-4o-ed7f6e35c166"  className='text-2xl' target='_blank'>All about GPT-4o</a> <span className="inline-block relative top-1"><IconLink/></span>
            </li>
            <li className='text-white py-5'>
                <a href="https://medium.com/@rakshitkharb2323/how-i-successfully-passed-the-dp-100-exam-tips-and-insights-30ed6b9fefe9"  className='text-2xl' target='_blank'>Guide to DP-100 Exam</a> <span className="inline-block relative top-1"><IconLink/></span>
            </li>
        </div>
      </div>
    </div>
  )
}

export default Others
