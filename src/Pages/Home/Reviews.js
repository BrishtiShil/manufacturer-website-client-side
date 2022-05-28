import React from 'react';
import people1 from '../../images/people1.png'
import people2 from '../../images/people2.png'
import people3 from '../../images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "very strong and sturdy ... spacious enough to fit in most of the tools ... good enough for any do-it-yourselfers.EXCELLENT product from taparia.",
            img: people1
        },
        {
            _id: 2,
            name: "Herry Jon",
            review: "Good product price is little bit high.",
            img: people2
        },
        {
            _id: 3,
            name: "Michael Jack",
            review: "Very usefull product.",
            img: people3
        }
    ]
    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold'>What our clients say</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;