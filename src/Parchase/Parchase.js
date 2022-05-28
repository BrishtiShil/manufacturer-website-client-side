import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const Parchase = () => {
    const { handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const onSubmit = async (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='flex h-screen justify-center items-center '>
            <div class="card w-96 bg-base-100  shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add Product</h2>
                    <div class="form-control w-full max-w-xs">
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3  mt-2'>
                            <input type="text" disabled value={user?.displayName} class="input w-full input-bordered max-w-xs" />
                            <input type="text" value={user?.email} class="input w-full input-bordered max-w-xs" />
                            <input type="text" placeholder="product name" class="input w-full input-bordered max-w-xs" />
                            <input type="number" placeholder="quantity" class="input w-full input-bordered max-w-xs" />
                            <input type="text" placeholder="Address" class="input w-full input-bordered max-w-xs" />
                            <input placeholder="Phone Number" class="input w-full input-bordered max-w-xs" />
                            <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parchase;