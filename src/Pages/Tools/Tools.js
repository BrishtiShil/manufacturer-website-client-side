import React, { useEffect, useState } from 'react';
import Parchase from '../../Parchase/Parchase';
import Service from './Service';

const Tools = () => {
    const [services, setServices] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://boiling-badlands-02194.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-12'>Available Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setProduct={setProduct}
                    ></Service>)
                }
            </div>
            {product && <Parchase product={product}></Parchase>}
        </div>
    );
};

export default Tools;