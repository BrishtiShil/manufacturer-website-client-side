import React from 'react';

const Service = ({ service }) => {
    const { name, description, minimumQuantity, availableQuantity, price, img } = service;
    return (
        <div class="card lg:max-w-lg btn-ghost bg-base-200 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price :{price}</p>
                <p>Minimum Quantity :{minimumQuantity}</p>
                <p>Available Quantity :{availableQuantity}</p>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;