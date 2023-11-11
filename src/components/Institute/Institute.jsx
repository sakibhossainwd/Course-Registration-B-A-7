// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Institute.css';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart'

const Institute = () => {
    // This state is for get data from json file
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('../../../FakeDB/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])

    return (
        <div className="insitute-container">
            <div className="courses-container">
                {
                    courses.map(course => <Courses
                    key={course.id}
                    course={course}
                    ></Courses>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
       
    );
};

export default Institute;