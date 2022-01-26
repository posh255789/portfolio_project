import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../firebase/config'
import '../asset/styles/login.css'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Homepage from '../components/homepage'
import Infomation from '../components/infomation'
import Carosel from '../components/carosel'
import Footer from '../components/footer'
import Activities from '../components/activities'

const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <>
        <div>
            <Navbar /> 
            <Sidebar />
            <Homepage /> 
            <Carosel/>
            <Infomation />
            <Activities/>
            <Footer/>
            
        </div>
       
        </>
    )
}

export default DashBoard;