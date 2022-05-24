import React from 'react';
import error from '../../images/error.png';

const NotFound = () => {
    return (
        <div>
            <h2 class='text-2xl font-bold text-center my-5 mb-0'>This site can't be reached</h2>
            <img class='mx-auto ' src={error} alt="" />
        </div>
    );
};

export default NotFound;