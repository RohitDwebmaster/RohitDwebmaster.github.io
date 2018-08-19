import React  from 'react';
import './style.css';
import { FaArrowRight , FaQuestionCircle } from 'react-icons/fa';
import { Link} from 'react-router-dom';

 const Homepage=()=>

 {

  return(
  <div className="box">

                <div className="row">
                    <div className="owner-img"><img src={require('../src/author-img.png')} alt="logo"/></div>
                        <span>
                          Now please enter the name of one of the
                          parents with contact details like email and
                          mobile number.
                        </span>
                 </div>

                <div className="row">
                    <div className="relationshiptext">Father/Mother Details</div>
                     <ul className="salutations">
                         <li className="salutations-list">Mr</li>
                         <li className="salutations-list">Mrs</li>
                         <li className="salutations-list">Ms</li>
                     </ul>
                        
                 </div>

                <div className="formbox">
                   <input type="text" placeholder="Full Name"/>
                   <input type="email" placeholder="Email"/>
                   <span className="contact-mobile"><input type="number" class="mobile" placeholder="10-digit mobile number"/> <span className="country-code">+91</span></span> 
                 </div>

                <div className="row">
                        <span>
                          <FaQuestionCircle /> Parent’s contact details will be used for operational
                          purposes.
                        </span>

                        <Link to="/insurance"><button>Next <span className="rightarrow"><FaArrowRight /></span></button></Link>
                 </div>

              </div>
      );
 }


 export default Homepage;

    