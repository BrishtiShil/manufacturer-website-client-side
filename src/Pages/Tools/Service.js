import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, setProduct }) => {
    const { name, description, minimumQuantity, availableQuantity, price, img } = service;
    return (
        <div className="card lg:max-w-lg  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price :{price}</p>
                <p>Minimum Quantity :{minimumQuantity}</p>
                <p>Available Quantity :{availableQuantity}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to="/parchase">
                        <label for="product-modal" onClick={() => setProduct(service)}
                            class="btn btn-sm btn-primary modal-button">Parchase</label></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;