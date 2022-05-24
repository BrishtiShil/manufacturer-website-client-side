import React from 'react';
import banner from '../../images/banner.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Manufacturer Website!</h1>
                    <p class="py-6 ">Manufacturers are considered a significant part of the economy. Manufacturing can be traced back to the ancient world.The typical manufacturer was a single skilled artisan with assistants. Each artisan kept the secrets of the production and transferred the knowledge only to apprentices. Production was limited to manual operations. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;