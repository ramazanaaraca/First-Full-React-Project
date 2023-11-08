

const Input = ({  For , LabelName ,  AttName = 'input' , SearchIcon , ...props}) => {
  return (
    <div className={SearchIcon ? ' focus:border-[#E43D30] outline-none  border border-[#DBDBDB] rounded-[10px]  duration-300 bg-white w-full flex '   : 'flex flex-start flex-col gap-1 lg:col-span-1'}>
          {
            SearchIcon ? <img src={SearchIcon} alt="" className="px-5"   /> : <label 
            htmlFor={For}
            className='text-sm font-normal text-black'
            >{LabelName}</label>
          }
        <AttName
        className={ SearchIcon ? 'w-full rounded-[10px]    px-2 py-2 outline-none' : ' focus:border-[#E43D30] outline-none  border border-[#DBDBDB] rounded-[10px] px-6 py-2 duration-300 bg-white w-full' } 
        {...props} />
    </div>
  )
}

export default Input