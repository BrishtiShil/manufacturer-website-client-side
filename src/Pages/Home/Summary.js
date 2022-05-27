import React from 'react';

const Summary = ({ summary }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={summary.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-5xl">{summary.name}</h2>
                <p className='text-2xl text-primary'>{summary.description}</p>
            </div>
        </div>
    );
};

export default Summary;