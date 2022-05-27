import React from 'react';
import Summary from './Summary';
import flag from '../../images/flag.png';
import client from '../../images/client.png';
import feedback from '../../images/feedback.png';

const Summaries = () => {
    const summaries = [
        {
            _id: 1,
            name: "72",
            description: "Countries",
            img: flag
        },
        {
            _id: 2,
            name: "273+",
            description: "Happy Clients",
            img: client
        },
        {
            _id: 3,
            name: "432+",
            description: "Feedbacks",
            img: feedback
        }
    ]
    return (
        <div className='my-28'>
            <div>
                <h2 className='text-5xl font-bold'>Bussiness Summary</h2>
                <h3 className='text-2xl text-primary'>Millions Business Trust Us</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    summaries.map(summary => <Summary
                        key={summary._id}
                        summary={summary}
                    ></Summary>)
                }
            </div>
            <div>
                <div class="card my-28 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-primary text-4xl ">Have any quention about us or get a products request?</h2>
                        <p className='text-3xl'>Don't hasitate to contact us</p>
                        <div class="card-actions justify-end ">
                            <button class="btn btn-accent text-white">Request for quite</button>
                            <button class="btn btn-primary text-white">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summaries;