// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Courses.css'

const Courses = ({course}) => {
    const {cover, title, details, price, creadit} = course
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
                        <p>Creadit: {creadit}</p>
                    </div>
                </div>
                <button>Select</button>
            </div>
        </div>
    );
};

export default Courses;