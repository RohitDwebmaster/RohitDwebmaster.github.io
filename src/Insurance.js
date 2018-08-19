import React  from 'react';
import './style.css';
import { FaArrowLeft , FaPhone , FaLocationArrow , FaArrowRight} from 'react-icons/fa';
import { Link} from 'react-router-dom';
 const Insurance=()=>

 {

  return(
  <div className="box">

                <div className="row">
                      <Link to="/"><div className="ltarrow"> <FaArrowLeft /></div></Link>
                      <div className="toffeelogo"><img src={require('../src/toffeelogo.png')} alt="toffee insurance logo" /></div>
                      <div className="rtarrow"> <FaPhone /></div>
                 </div>

                <div className="row">
                      <div className="shadowbox">

                         <div className="row padd">
                                <div className="lefttext"><strong>Dengue Insurance</strong> <br/> <span className="date">June 2017 - June 2018</span></div>
                                <div className="rightlogo"><img src={require('../src/toffee.png')} alt="toffee logo" /></div>
                         </div>

                         <div className="row padd margin-down">
                                <div className="lefttext"><span className="policy">POLICY NUMBER</span> <br/><span className="policy-number">0101 98138 73980</span></div>
                         </div>

                         <div className="row padd margin-down">
                                <div className="lefttext"><strong>Sonia Babu</strong> <br/> <span className="date"><a href="mailto:mythrineedinsurence@gmail.com">mythrineedinsurence@gmail.com</a></span></div>
                                <div className="rightlogo"><img src={require('../src/religare.png')} alt="religare logo"  width="80"/></div>
                         </div>

                      </div>
                 </div>

                <div className="row">
                    <div className="owner-img"><img src={require('../src/author-img.png')} alt="logo"/></div>
                        <span style={{display: 'block' , marginTop: '10px'}}>
                          Mythri, please enter your residenial
                           location.
                        </span>
                 </div>

                <div className="row margin-down">
                    <FaLocationArrow /> <span style={{ marginLeft: '10px', display: 'inline'}}>Residential Location</span>
                 </div>

                <div className="formbox margin-down">
                   <input type="text" placeholder="Pin code"/>
                   <input type="text" placeholder="State"/>
                   <span className="city"><input type="text" class="citytext" placeholder="City"/> <Link to="/package"><span className="next-arrow"><FaArrowRight /></span></Link></span> 
                 </div>


              </div>
      );
 }


 export default Insurance;

    