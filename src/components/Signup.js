import { memo } from 'react';
import { Link } from 'react-router-dom';
import google from '../Assets/google-icon.svg'
import Facebook from '../Assets/facebook-icon.svg'
function Signup() {
    return (
        <div className='container my-5' id='login-page'>
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-sm-7 col-9 shadow rounded-2 py-2 px-3 text-center'>
                    <span className='fs-4 fw-bold ' >Signup </span>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <span className=' fw-normal text-muted fs-sm'>Already have an account?</span>
                        <Link to='/login' className='fs' style={{ color: "blue" }}>Signin</Link>
                    </div>
                    <span className='mx-3 text-muted fw-bold fs-sm'>Enter your details</span>
                    <form className='d-flex flex-column m-3 gap-3 text-start'>
                        <div className='form-floating'>
                            <input type='text' name='name' value='' placeholder='name' id='name' className='bg-light form-control' />
                            <label className='form-lable text-muted fw-bold fs-sm' htmlFor='name'>Name</label>
                        </div>
                        <div className='form-floating'>
                            <input type='email' name='name' value='' placeholder='email' id='email' className='bg-light form-control' />
                            <label className='form-lable text-muted fw-bold fs-sm' htmlFor='email'>Email</label>
                        </div>
                        <div className='form-floating'>
                            <input type='password' name='password' value='' placeholder='pwd' id='password' className='bg-light form-control' />
                            <label className='form-lable text-muted fw-bold fs-sm' htmlFor='password'>Password</label>
                        </div>
                        <div className='form-floating'>
                            <input type='password' name='confirm-password' value='' placeholder='confirm-pwd' id='confirm-password' className='bg-light form-control' />
                            <label className='form-lable text-muted fw-bold fs-sm' htmlFor='confirm-password'>Confirm Password</label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' id='remember' />
                            <label htmlFor='remember' className='form-check-label fs-sm text-muted fw-bold user-select-none'>I accept <a href='#' className=' text-primary fs-sm text-lowercase text-decoration-underline'> terms and condition </a></label>
                        </div>
                        <button className='btn btn-primary fw-bold fs-sm'>Continue</button>
                    </form>
                    <span className='fw-bold text-muted fs-sm'>OR</span>
                        <div className='d-grid mx-3 mt-2 mb-3 gap-3 '>
                            <button className=' btn-block btn-primary btn shadow-sm'>
                                <img src={google} alt='google-icon' className='img-fluid me-3' width="25px" />
                                <span className=' fw-bold fs-sm'>Signin with Google</span>
                            </button>
                            <button className=' btn-block btn-primary btn shadow-sm'>
                                <img src={Facebook} alt='facebook-icon' className='img-fluid me-3' width="25px" />
                                <span className='  fw-bold fs-sm'>Signin with Facebook</span>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Signup)