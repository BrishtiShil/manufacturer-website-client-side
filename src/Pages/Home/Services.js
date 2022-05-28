import React, { useState } from 'react';
import hummar from '../../images/hammar.png';
import wrench from '../../images/wrench.png';
import spade from '../../images/spade.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Hummar Uses",
            description: "Hammers are used for general carpentry, framing, nail pulling, cabinet making etc.",
            img: hummar
        },
        {
            _id: 2,
            name: "Wrench Uses",
            description: "Wrench are used for gripping, fastening, turning, tightening etc.",
            img: wrench
        },
        {
            _id: 3,
            name: "Spade Uses",
            description: "digging straight-edged holes or trenches, slicing and lifting sod, and edging flower beds or lawns.",
            img: spade
        }
    ]
    return (
        <div className='my-28'>
            <div>
                <h2 className='text-3xl font-bold'>Different types of Uses</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    )
};

export default Services;