import React from 'react';
import worker from '../../images/worker.png';

const Worker = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={worker} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">History of Manufacturing</h1>
                    <p class="py-6">Manufacturers are considered a significant part of the economy. Manufacturing can be traced back to the ancient world. However, for many centuries, the typical manufacturer was a single skilled artisan with assistants. Each artisan kept the secrets of the production and transferred the knowledge only to apprentices. Production was limited to manual operations.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Worker;