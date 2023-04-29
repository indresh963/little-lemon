import { memo } from 'react';
import { Link } from 'react-router-dom';
import google from '../Assets/google-icon.svg'
import Facebook from '../Assets/facebook-icon.svg'
function Log() {
    return (
        <>
            <div className="toast show">
                <div className="toast-header">
                    <strong className="me-auto">Notice</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div className="toast-body">
                    <p>This login page is for designing purpose only for interactivity go to
                        <Link className='ms-1 me-2 text-decoration-underline text-primary' to="/signup">signup</Link>page.
                    </p>
                </div>
            </div>
            <div className='container my-5' id='login-page'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-sm-7 col-9 shadow rounded-2 py-2 px-3 text-center'>
                        <span className='fs-4 fw-bold ' >Login </span>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <span className=' fw-normal text-muted fs-sm'>Dont have an account?</span>
                            <Link to='/signup' className='fs' style={{ color: "blue" }}>Signup</Link>
                        </div>
                        <span className='fw-bold text-muted fs-sm'>OR</span>
                        <div className='d-grid mx-3 mt-2 mb-3 gap-3 '>
                            <button className=' btn-block btn-light btn shadow-sm'>
                                <img src={google} alt='google-icon' className='img-fluid me-3' width="25px" />
                                <span className=' text-muted fw-bold fs-sm'>Signup with Google</span>
                            </button>
                            <button className=' btn-block btn-light btn shadow-sm'>
                                <img src={Facebook} alt='facebook-icon' className='img-fluid me-3' width="25px" />
                                <span className=' text-muted fw-bold fs-sm'>Signup with Facebook</span>
                            </button>
                        </div>
                        <span className='mx-3 text-muted fw-bold fs-sm'>Enter your login details</span>
                        <form className='d-flex flex-column m-3 gap-3 text-start'>
                            <div className='form-floating'>
                                <input type='email' name='email' value='' placeholder='Enter Email' id='email' className='bg-light form-control' />
                                <label className='form-lable text-muted fw-bold fs-sm' htmlFor='email'>Enter Email</label>
                            </div>
                            <div className='form-floating'>
                                <input type='password' name='password' value='' placeholder='pwd' id='password' className='bg-light form-control' />
                                <label className='form-lable text-muted fw-bold fs-sm' htmlFor='password'>Password</label>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='form-check'>
                                    <input type='checkbox' className='form-check-input' id='remember' />
                                    <label htmlFor='remember' className='form-check-label fs-sm text-muted fw-bold user-select-none'>Rememeber me</label>
                                </div>
                                <a href='#' className=' text-primary fs-sm'>Forgot password ?</a>
                            </div>
                            <button className='btn btn-primary fw-bold fs-sm'>Signin</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default memo(Log);