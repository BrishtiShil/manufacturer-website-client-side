import React from 'react';

const Parchase = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Parchese</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parchase;