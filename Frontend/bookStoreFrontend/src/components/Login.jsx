import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SignUp from './SignUp';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    return(<>
        <div>
                <dialog id='login_modal'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" onClick={() => document.getElementById('login_modal').close()} className={`${styles.cross_button}`}>X</Link>
                        <h3>Login</h3>
                        <div>
                            <span>Email</span>
                            <input
                                className={`${styles.email} ${styles.input_box_size}`}
                                type="email"
                                placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className={`${styles.password}`}>
                            <span>Password</span>
                            <input
                                className={`${styles.input_box_size}`}
                                type="password"
                                placeholder='Enter Your Password'
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className={`${styles.login_signup}`}>
                            <button className={`${styles.login_button}`} type='submit'>Login</button>
                            <p>Not registered? <span><Link to="/signup" onClick={() => document.getElementById('login_modal').close()} >SignUp</Link></span></p>
                        </div>
                    </form>
                </dialog>
            </div>
    </>)
    // return (
    //     <>
    //         <div>
    //             <dialog id='login_modal'>
    //                 <form onSubmit={handleSubmit(onSubmit)}>
    //                     <button to="/" onClick={() => document.getElementById('login_modal').close()} className={`${styles.cross_button}`}>X</button>
    //                     <h3>Login</h3>
    //                     <div>
    //                         <span>Email</span>
    //                         <input
    //                             className={`${styles.email} ${styles.input_box_size}`}
    //                             type="email"
    //                             placeholder='Enter Your Email'
    //                             {...register("email", { required: true })}
    //                         />
    //                     </div>
    //                     <div className={`${styles.password}`}>
    //                         <span>Password</span>
    //                         <input
    //                             className={`${styles.input_box_size}`}
    //                             type="password"
    //                             placeholder='Enter Your Password'
    //                             {...register("password", { required: true })}
    //                         />
    //                     </div>
    //                     <div className={`${styles.login_signup}`}>
    //                         <button className={`${styles.login_button}`} type='submit'>Login</button>
    //                         <p>Not registered? <span><Link to="/signup" onClick={() => document.getElementById('login_modal').close()} >SignUp</Link></span></p>
    //                     </div>
    //                 </form>
    //             </dialog>
    //         </div>
    //     </>
    // )
}

export default Login;
