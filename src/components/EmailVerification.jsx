import React, { useState } from 'react'
import { auth } from '../config/firebase'
import Swal from 'sweetalert';
import { sendEmailVerification } from 'firebase/auth';

export default function EmailVerification() {
    const currentUser = auth.currentUser

    const [loading, setLoading] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const verify = async () => {
        setIsClicked(true);
        setLoading(true);

        try {
            await sendEmailVerification(currentUser);
            Swal({
                icon: "success",
                title: 'verification link has been sent to your email inbox',
                showConfirmButton: true,
                timer: 2000,
                confirmButtonColor: '#f0481a',
            });

        } catch (error) {
            Swal({
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 2000,
                confirmButtonColor: '#f0481a',
            });
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <div className=''>
            {currentUser?.emailVerified === false &&
                <div className='flex justify-between mx-20 my-10 rounded-lg bg-yellow-100 py-2 px-3 '>
                    <div className='flex justify-center items-center'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 9v2m0 4v.01" />
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </span>      <p className='pl-3 pb-1'> Your email has not been verified yet!</p>
                    </div>

                    <button
                        onClick={verify}
                        disabled={isClicked}
                        className='font-medium text-orange-500'
                    >
                        Verify email
                    </button>
                </div>
            }
        </div>
    )
}
