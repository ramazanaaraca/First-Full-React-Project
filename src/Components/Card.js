import { Link } from 'react-router-dom';
import Button2 from './Button2';


const Card = ({ discover, custom ,order ,image ,text , img , blogTitle}) => {

    const containerClassName = `bg-[#F7F7F7] py-[40px] px-[30px] flex items-center gap-5 rounded-[20px] duration-300 group hover:bg-[#f5ececfd] ${custom}`;
    const textClassName = `text-3xl font-medium max-w-[200px] ${text}`;
    const imgClassName = `w-[300px] h-[200px] object-cover rounded-3xl ${img}`;
    const orderClassname = `flex items-start gap-4 flex-col ${order}`;

  return (
    <Link to={discover.label} className={containerClassName}>
      <div className={orderClassname}>
        <h5 className={textClassName}>{discover.title}</h5>
        <p className='text-base font-normal'>{discover.paragraf}</p>
        <div className='flexBetween w-full'>
          <Button2 />
          {blogTitle && <div className='bg-[#E43D300F] text-center rounded-full text-sm text-red-600 py-2 px-7'>
            {discover.blogTitle}
          </div>}
        </div>
      </div>
      <div>
        <img
          className={imgClassName}
          src={image}
          alt='training'
        />
      </div>
    </Link>
  );
};

export default Card;
