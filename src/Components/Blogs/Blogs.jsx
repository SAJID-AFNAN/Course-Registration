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
        <div className="lg:w-3/4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-6 lg:ml-8">
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