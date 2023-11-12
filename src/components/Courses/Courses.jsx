// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Courses.css'
import { toast } from 'react-toastify';

const Courses = ({course, selectedCourse, setselectedCourse}) => {
    const {cover, title, details, price, creadit} = course;

    const selectedCourseHandler = (select) => {
        const takenCourse = selectedCourse.find(selectCourse => selectCourse.id);
        console.log(takenCourse);
        
        const newCourses = [...selectedCourse, select];
        setselectedCourse(newCourses);
        toast.success("Selected successfull", {
            autoClose:1000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    return (
        <div>
            <div className="course">
                <img src={cover} alt="" />
                <h3>{title}</h3>
                <p>{details}</p>
                <div className="price-creadit">
                    <div className="price">
                        <p>Price: {price}</p>
                    </div>
                    <div className="creadit">
                        <p>Creadit: {creadit} hr</p>
                    </div>
                </div>
                <button onClick={() => selectedCourseHandler(course)}>Select</button>
            </div>
        </div>
    );
};

export default Courses;