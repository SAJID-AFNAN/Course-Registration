// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Blogs = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="w-3/4 grid grid-cols-3">
            {
                courses.map(course => <Card key={course.id} course={course}></Card>)
            }
        </div>
    );
};

Blogs.propTypes = {

};

export default Blogs;