import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Blogs = ({ handleAddCard }) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="w-3/4 grid grid-cols-3 gap-6 ml-8">
            {
                courses.map(course => <Card
                    key={course.id}
                    course={course}
                    handleAddCard={handleAddCard}
                ></Card>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddCard: PropTypes.func
};

export default Blogs;