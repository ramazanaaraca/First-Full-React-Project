import { ErrorMessage, FastField, useField ,  } from "formik"
import { memo } from "react";

const Input = ({  For , LabelName , SearchIcon , ...props}) => {

  const [field , meta , helpers ] = useField(props); 




  return (

    <label className={SearchIcon ? ' focus:border-[#E43D30] outline-none  border border-[#DBDBDB] rounded-[10px]  duration-300 bg-white w-full flex '   : 'flex flex-start flex-col gap-1 lg:col-span-1'}>
          {
            SearchIcon ? <img src={SearchIcon} alt="" className="px-5"   /> : LabelName
          }
        <input
        className={ SearchIcon ? 'w-full rounded-[10px]    px-2 py-2 outline-none' : ' focus:border-[#E43D30] outline-none  border border-[#DBDBDB] rounded-[10px] px-6 py-2 duration-300 bg-white w-full' } 
        {...props} {...field} />
        <ErrorMessage name={field.name} component='small' className="text-sm text-red-500 font-medium"/>
    </label>
  )
}

export default memo(Input)