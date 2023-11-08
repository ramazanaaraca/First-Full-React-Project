import React from 'react'

const TabButton = ({title , onSelect  , className ,  ...props   }) => {
  return (
    <>
        <button onClick={onSelect} {...props} className={`text-[#868686] text-base   pb-2 duration-300 ease-linear bottom-border ${className} `}>
        {title}
        </button>
    </>
  )
}

export default TabButton