// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
import BookedCourse from '../BookerCourse/BookedCourse';

const Cart = ({selectedCourse, setselectedCourse}) => {

    let credit = 0;
    let total = 0;
    for (const  course of selectedCourse){
        // console.log(course)
        credit = credit + course.creadit;
        total = total + course.price
    }

    return (
        <div>
            <div className="cart-container">
                <h3 className='ramaining-hr'>Credit Hour Remaining 7 hr</h3>
                <h4>Total Courses: {selectedCourse.length}</h4>
                <h2>Course Name:-</h2>
                <ol>
                    {
                        selectedCourse.map(bookedCourse => <BookedCourse key={bookedCourse.id} selectedCourse={selectedCourse} setselectedCourse={setselectedCourse} bookedCourse={bookedCourse}></BookedCourse>)
                    }
                </ol>
                <h3>Total Credit Hour: {credit} hr</h3>
                <h3>Total Price: {total} USD</h3>                
            </div>
        </div>
    );
};

export default Cart;