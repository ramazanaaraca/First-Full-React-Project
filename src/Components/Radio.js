import { Radio , Typography } from "@material-tailwind/react";
 
 function RadioDefault() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 relative right-3 mb-4">
      <Radio  color="red"  
       name="type"
       label={
         <Typography
           color="blue-gray"
           className="flex font-medium text-sm text-black"
         >
           Monsieur
         </Typography>
       }
     />
     <Radio  color="red"  
       name="type"
       label={
         <Typography
           color="blue-gray"
           className="flex font-medium text-sm text-black"
         >
          Madame
         </Typography>
       }
     />
     <Radio  color="red"  
       name="type"
       label={
         <Typography
           color="blue-gray"
           className="flex font-medium text-sm text-black"
         >
          Mademoiselle
         </Typography>
       }
     />
    </div>
  )
 }

  export default RadioDefault