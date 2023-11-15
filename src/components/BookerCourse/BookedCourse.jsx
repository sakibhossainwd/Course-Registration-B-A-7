// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BookedCourse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

import Swal from 'sweetalert2';
const BookedCourse = ({ bookedCourse, selectedCourse, setselectedCourse }) => {
    console.log(selectedCourse)
    const handleRemove = (id) => {
        console.log('remove this list', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const remainingItems = selectedCourse.filter(item => item.id !== id);
                setselectedCourse(remainingItems)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div>
            <li>
                <div className="bookedCourse">
                {bookedCourse.title}
                <button className='deleteIcon' onClick={ () => handleRemove(bookedCourse.id)}>
                <FontAwesomeIcon icon={faDeleteLeft}/>
                </button>
                </div>
            </li>
        </div>
    );
};

export default BookedCourse;