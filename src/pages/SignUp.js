import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../firebase/config'
import '../asset/styles/login.css'
import DisplayLottie from '../components/DisplayLottie';
import ButtHome2 from'../Lottie/buttHome2.json'
const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
        <div className="body-custom">
            <section  className="login">
            <div className="container loginContainer">
            <label className="logintop"> Registration </label>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Type Email For Registration</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btnContainer">Submit</button>
            <div className="btnContainer">
            <p>Already Have an Account?</p> <a class="linksign " href="/login">Login?</a>
            <div className="homeBt">
						<a href="/"><DisplayLottie animationData={ButtHome2} /></a>
					</div>
            </div>
            </form>
            </div>
            </section>
            </div>
        </>
    )
}

export default SignUp;
