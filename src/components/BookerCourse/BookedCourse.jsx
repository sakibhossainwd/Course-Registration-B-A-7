// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookedCourse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const BookedCourse = ({ bookedCourse }) => {

    return (
        <div>
            <li>
                <div className="bookedCourse">
                {bookedCourse.title}
                <FontAwesomeIcon icon={faDeleteLeft}  className='deleteIcon'/>
                </div>
            </li>
        </div>
    );
};

export default BookedCourse;