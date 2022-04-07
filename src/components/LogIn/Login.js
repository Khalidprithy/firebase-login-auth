import React, { useState } from 'react';
import './Login.css'
import { AiFillFacebook, AiFillGoogleSquare, AiFillGithub } from 'react-icons/ai';
import app from '../../firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const auth = getAuth(app)

const Login = () => {
    const [user, setUser] = useState({});



    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        console.log('Git')
    }


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
        console.log('working')
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setUser({});
            })
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card py-3 px-2">
                        <p className="text-center mb-3 mt-2"> <span className='span-text'> Log In with</span></p>
                        <div className="row mx-auto ">
                            <div className="col-4"> <AiFillFacebook className='icons facebook-icon' ></AiFillFacebook> </div>
                            <div className="col-4"> <AiFillGoogleSquare onClick={handleGoogleSignIn} className='icons google-icon'></AiFillGoogleSquare> </div>
                            <div className="col-4"> <AiFillGithub onClick={handleGithubSignIn} className='icons github-icon'></AiFillGithub>  </div>
                        </div>
                        <div className="division">
                            <div className="row">
                                <div className="col-3">
                                </div>
                                <div className="col-6"><span className='span-text'>Login with Email</span></div>
                            </div>
                        </div>
                        <form className="myform">
                            <div className="form-group"> <input type="email" className="form-control" placeholder="Email" /> </div>
                            <div className="form-group"> <input type="password" className="form-control" placeholder="Password" /> </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group form-check"> <input type="checkbox" className="form-check-input" id="exampleCheck1" /> <label className="form-check-label" for="exampleCheck1"> <span className='span-text'>Already Registered?</span></label> </div>
                                </div>
                                <div className="col-md-6 col-12 bn"> <span className='span-text'>Forgot password?</span></div>
                            </div>
                            <div className="form-group mt-3">
                                {
                                    !user.uid ?
                                        <button type="button" className="btn btn-block btn-success btn-lg"><small><i className="far fa-user pr-2"></i>Login</small></button>
                                        :
                                        <button onClick={handleSignOut} type="button" className="btn btn-block btn-success btn-lg"><small><i className="far fa-user pr-2"></i>Sign Out</small></button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <h4>Name: {user.displayName}</h4>
                <p>Email:{user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Login;