import { memo, useRef } from 'react';
import { useDataProvider } from './DataProvide';

function Login() {
    const { activeUser, isLoggedIn, myFun } = useDataProvider();
    const element = useRef();
    const imageUploader = useRef();
    function handleChange(e) {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            myFun("activeUser", reader.result);
        }

    }
    return (
        <div id="user-account" className='container py-3'>
            <div className='row justify-content-center gap-4'>
                <div className='col-10 text-center mb-4'>
                    <img ref={element} id="account-dp" className='rounded-circle shadow-sm border'
                        src={(isLoggedIn && activeUser.img_src) ? activeUser.img_src : require('../Assets/user.png')}
                        alt="user" onClick={() => isLoggedIn && imageUploader.current.click()} style={{ cursor: "pointer" }} /><br />
                    <input ref={imageUploader} style={{ display: "none" }} type='file' accept='image/*' onChange={handleChange} multiple />
                    {isLoggedIn && <p className='my-2'>Click to upload image</p>}
                </div>
                <div className='col-10 text-center '>
                    {
                        isLoggedIn ? (
                            <>
                                <div className='row gap-2 details shadow p-2 rounded-2'>
                                    <div className='col-12'><h4>User Details</h4></div>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-6'><h5>Name</h5></div>
                                            <div className='col-6'><p>{activeUser.name}</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'><h5>Email</h5></div>
                                            <div className='col-6'><p>{activeUser.email}</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'><h5>Address</h5></div>
                                            <div className='col-6'><p>Kantipuram phase-2 ganeshpur road chinhat lucknow</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4 gap-2 details shadow p-2 rounded-2'>
                                    <div className='col-12'><h4>User Details</h4></div>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-6'><h5>Name</h5></div>
                                            <div className='col-6'><p>{activeUser.name}</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'><h5>Email</h5></div>
                                            <div className='col-6'><p>{activeUser.email}</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'><h5>Address</h5></div>
                                            <div className='col-6'><p>Kantipuram phase-2 ganeshpur road chinhat lucknow</p></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <h4>You're not logged in</h4>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Login);