import PropTypes from 'prop-types';

const Card = ({ course }) => {
    const { course_name, img, details, price, credit } = course;
    return (
        <div>
            <img className="w-72 h-44" src={img} alt="" />
            <h2 className="text-lg font-semibold">{course_name}</h2>
            <p>{details}</p>
            <div>
                <h4>Price : {price}</h4>
                <h4>Credit : {credit}</h4>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object
};

export default Card;