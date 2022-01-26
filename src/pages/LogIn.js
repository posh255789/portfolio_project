import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../firebase/config'
import '../asset/styles/login.css'
import DisplayLottie from '../components/DisplayLottie';
import ButtHome from'../Lottie/buttHome.json'
const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <>
        <div className="body-custom">
        <section  className="login">
            <div className="container loginContainer">
            <label className="logintop"> Login</label>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Type Yours Email To Entry Thes Site!</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="btnContainer">
            <button type="submit" className="btnContainer">Submit</button>
            <p>Don't Have an Account?</p> <a class="linksign" href="/signup">Regist Now?</a>
            <div className="homeBt">
						<a href="/"><DisplayLottie animationData={ButtHome} /></a>
					</div>
            </div>
            </form>
            </div>
            </section>
            </div>
            
        </>
    )

    
}

export default LogIn;


