// eslint-disable-next-line no-unused-vars
import React from 'react';

const BookedCourse = ({selectedCourse}) => {
    console.log(selectedCourse.title)
    let title = " "
    for (const course of selectedCourse){
         title = course.title
    }
    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

export default BookedCourse;