import React  from 'react';
import './style.css';
import {  FaRupeeSign} from 'react-icons/fa';

 const Package=()=>

 {

  return(
  <div className="box pkg">


                <div className="row pkg">
                      <div className="squarebox">

                         <div className="row padd">
                                <div className="centertext"><strong>Dengue Insurance</strong> <br/> <span className="health-desc">Health insurance to cover all dengue <br/> related expenses.</span></div>
                         </div>

                         <div className="row">
                                <div className="centertext center-width">
                                  <div className="leftbox"><strong>1 Year</strong> <br/> <span className="health-desc">Policy Duration</span></div>
                                  <div className="righbox"><strong><FaRupeeSign /> 425</strong> <br/> <span className="health-desc">Annual Premium</span></div>
                                </div>
                         </div>
                      </div>
                 </div>

               <div className="row">
                      <div className="imgcenter"><img src={require('../src/watscoveredimg.png')} alt="support logo" /> <br/> What’s covered?</div>
                 </div>

                <div className="row">
                                <div className="centertext centerbox-width">
                                  <div className="leftsquarebox"><strong>Hospitalisation</strong> <br/> <span className="health-desc">Upto ₹25,000</span></div>
                                  <div className="rightsquarebox"><strong> Diagnostic Tests</strong> <br/> <span className="health-desc">covered</span></div>
                                </div>

                                <div className="centertext centerbox-width">
                                  <div className="leftsquarebox"><strong>Medicines</strong> <br/> <span className="health-desc">covered</span></div>
                                  <div className="rightsquarebox"> <span className="health-desc">1 More</span></div>
                                </div>

                                <button className="btn">See coverage details</button>
                 </div>

              </div>
      );
 }


 export default Package;

    