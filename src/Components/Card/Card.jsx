import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Card = ({ course, handleAddCard }) => {
    const { course_name, img, details, price, credit } = course;
    return (
        <div className='bg-white rounded-xl space-y-3 p-4 mb-3 lg:mb-0'>
            <img className="h-40 mx-auto w-full rounded-xl" src={img} alt="" />
            <h2 className="text-lg font-semibold">{course_name}</h2>
            <ol>
                <li className='text-gray-500'>{details}</li>
            </ol>
            <div className='flex items-center '>
                <span className='text-xl'><FiDollarSign></FiDollarSign></span>
                <h4 className='px-2 text-gray-500'>Price : {price}</h4>
                <span className='pl-6 pr-2 text-xl'><IoBookOutline></IoBookOutline></span>
                <h4 className='text-gray-500'>Credit : {credit}hr</h4>
            </div>
            <button onClick={() => handleAddCard(course_name, credit, price)} className='text-lg bg-blue-600 hover:bg-blue-800 text-white w-full rounded-md py-1'>Select</button>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object,
    handleAddCard: PropTypes.func
};

export default Card;