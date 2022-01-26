import firebaseConfig from '../firebase/config'
import React, { useEffect } from 'react';
import '../asset/styles/sidebar.css'
import $ from 'jquery';
const Sidebar = () => {
    useEffect(() => {
       
        $(document).ready(function(){
            $("#menu-toggle").click(function(e){
              e.preventDefault();
              $("#wrapper").toggleClass("menuDisplayed");
            });
          });
          
    
    }, []);
    return (

        <body>
  <div id="wrapper">
  
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <h1>Contract Me</h1>
        <li><a href="https://www.facebook.com/profile.php?id=100010193262635"><i class="fab fa fa-facebook"></i></a></li>
        <li><a href="https://twitter.com/PoshTC25"><i class="fab fa fa-twitter"></i></a></li>
        <li><a href="https://github.com/posh255789"><i class="fab fa fa-github fa-lg"></i></a></li>
      </ul>
      <div class="bottom-content">
                <li class="blogout">
                    {/* <i class='bx bx-log-out icon'  onClick={() => firebaseConfig.auth().signOut()}></i> */}
                        <span class="text nav-text btn btn-danger" onClick={() => firebaseConfig.auth().signOut()}>Logout</span>
               
                </li>
                </div>
    </div>
    

    <div id="page-content-wrapper">
            <a href="#" class="btn" id="menu-toggle"><span class="glyphicon glyphicon-menu-hamburger"></span></a>
            
  </div>
	
	
  </div>
</body>
    )
}


export default Sidebar;
