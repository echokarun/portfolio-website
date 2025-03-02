import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
   const buttonClasses  = active ? "text-white border-b border-purple-500 cursor-pointer" : "text-[#ADB7BE] "
   return (
      <button
         className='hover:text-white'
         onClick={selectTab}>
         <p className={` mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
         </p>
      </button>
  )
}

export default TabButton