import React from 'react';
import {UserOutlined,ImportOutlined,HeartTwoTone,GiftOutlined } from '@ant-design/icons';
import './LoginT.css';

 const LoginT = () => {
    return (
        <div className="logint">
             <div className="logint__in" >
                 <h2>New Customer?</h2>
                 <h2 style={{color:'blue'}}>Signup</h2>
             </div>
             <hr/>
             <div className="logint__in" >
                <UserOutlined  style={{marginRight:'10px'}}/>
                <p>My Profile</p>
             </div> 
             <hr />
             <div className="logint__in" >
                 <img src ="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" width="16px" style={{marginRight:'10px'}}></img>
                 <p>Flipkart Plus </p>
                 </div>
                 <hr /> 
             <div className="logint__in" >
                <ImportOutlined style={{marginRight:'10px'}} />
                <p>Store</p>
                </div> 
                <hr/>
             <div className="logint__in" >
                 <HeartTwoTone style={{marginRight:'10px'}}/>
                 <p>Wishlist</p>
                 </div> 
                 <hr/>
             <div className="logint__in" >
                <GiftOutlined style={{marginRight:'10px'}}/>
                <p>Gift Cards</p>
                </div>  
        </div>
    )
}
export default LoginT;