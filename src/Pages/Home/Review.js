import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
                <h2 className='font-bold'>{review.name}</h2>
            </div>
        </div>
    );
};

export default Review;