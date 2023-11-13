import { Link } from 'react-router-dom';
import Button2 from './Button2';
import { scrollTop } from './ScrollTop';


const Card = ({ item , custom ,order ,image ,text , img , blogTitle}) => {

    const containerClassName = `bg-[#F7F7F7] py-[40px] px-[20px] flex items-center lg:gap-5 gap-4 rounded-[20px] duration-300 group hover:bg-[#f5ececfd] ${custom}`;
    const textClassName = `text-2xl font-medium max-w-[200px] lg:text-3xl ${text}`;
    const imgClassName = `w-[300px] h-[200px] object-cover rounded-3xl ${img}`;
    const orderClassname = `flex items-start gap-4 flex-col ${order}`;

  return (
    <Link onClick={scrollTop} to={`/Trainings/${item.slug}`} className={containerClassName}>
      <div className={orderClassname}>
        <h5 className={textClassName}>{item.title}</h5>
        <p className='lg:text-base text-sm font-normal'>{item.paragraf}</p>
        <div className='flexBetween w-full'>
          <Button2 />
          {blogTitle && <div className='bg-[#E43D300F] text-center rounded-full text-sm text-red-600 py-2 px-7'>
            {item.blogTitle}
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
