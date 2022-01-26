import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../firebase/config'
import Navbar from '../components/navbar'
const Contract = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div> 
           <Navbar/>
            </div>
            
      
    )
}

export default Contract;