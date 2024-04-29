import React from 'react'
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };

  return (
    <>
      <div className={`${styles.signup_form}`} id='signup_modal'>
        <div>
          <h3>SignUp</h3>
            <Link to="/" className={`${styles.cross_button}`}>X</Link>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <span>Name</span>
              <input className={`${styles.name} ${styles.input_box_size}`} type="text"  placeholder='Enter Your Name' 
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <span>Email</span>
              <input className={`${styles.email} ${styles.input_box_size}`} type="email" placeholder='Enter Your Email' 
              {...register("email", { required: true })}
              />
            </div>
            <div className={`${styles.password}`}>
              <span>Password</span>
              <input className={`${styles.input_box_size}`} type="password" placeholder='Enter Your Password'
              {...register("password", { required: true })}
              />
            </div>
            <div className={`${styles.login_signup}`}>
                <button className={`${styles.signup_button}`} type="submit">SignUp</button>
                <p>Have Account? <span><Link to='/' className={`${styles.login_in_signup}`} onClick={()=>document.getElementById("login_modal").showModal()}>Login</Link>
                <Login></Login>
                </span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp