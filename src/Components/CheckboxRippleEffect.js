import { Checkbox , Typography } from "@material-tailwind/react";
 
function CheckboxRippleEffect({labelName , linkOne , linkTwo}) {
  return (
    <>
        <Checkbox color="red"  
      label={
        <Typography color="blue-gray" className="lg:flex text-sm font-bold">
          {labelName}
         {
          linkOne &&  <Typography
          as="a"
          href="#"
          color="blue"
          className="font-medium text-sm transition-colors text-[#E43D30] underline"
        >
          &nbsp;{linkOne}
        </Typography>
         }
        {
          linkTwo && <Typography
          as="a"
          href="#"
          color="blue"
          className="font-medium text-sm  transition-colors text-[#E43D30] underline"
        >
          &nbsp;{linkTwo}
        </Typography>
        }
        </Typography>
      }
    />
    </>
  );
}

export default CheckboxRippleEffect