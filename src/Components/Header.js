import { Divider} from 'antd';
import React from 'react';
import './Header.css';
import {SearchOutlined,DownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import './SecondR.css';
import Fashion from './Fashion';
import Electronics from './Electronics';
import Slider from './Slider';

const Header =() =>{
        return(
        <div>
        <div className ='header'>
         <div className='header__first'>
             <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart"></img>
             <div className="explore">
                 <span style={{fontSize:'11px',color:'white',fontStyle:'italic'}}>Explore</span>
                 <span style={{color:'#f9e107',fontStyle:'italic', fontSize:'11px'}}>Plus</span>
                 <span><img width="9" src ="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt ="" ></img></span>
             </div>
         </div>
         <div className='header__second'>
             <input type ="text" placeholder="Search for products,brands and more"/>
             <SearchOutlined style={{color: '#2874f0',padding: '6px',fontSize: '20px'}} />
             </div>   
         <div className='header__third'>
             <Tippy content={<LoginT></LoginT>} interactive={true} theme="light">
             <button>Login</button>
             </Tippy>
             </div>   
         <div className='header__fouth'>
             <Tippy content={<MoreT></MoreT>} interactive={true} theme="light">
             <span>More</span>
             </Tippy>
             <DownOutlined style={{color:'white'}} /></div>   
         <div className='header__fifth'>
         <ShoppingCartOutlined/>
         <span>Cart</span></div>   
        </div>
        <div className="secondr">
        <div className="images">
             <div>
             <img class="Img"src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100">
             </img>
            </div>
                <div><h5>Top Offers</h5></div>
            </div>
            <div className="images">
            <img class="Img" alt="Grocery" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
            <div><h5>Grocery</h5></div>
            </div>
            <div className="images">
            <img class="Img" alt="Mobiles" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"/>
            <div><h5>Mobiles</h5></div>
            </div>
            <div className="images">
            <img class="Img" alt="Fashion" src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"/>
            <div>
            <Tippy content={<Fashion></Fashion>} interactive={true} theme="light" >
                <h5>Fashion <DownOutlined /></h5>
            </Tippy>
            </div>
            </div>
            <div className="images">
            <img class="Img" alt="Electronics" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"/>
            <div>
            <Tippy content={<Electronics></Electronics>} interactive={true} theme="light" >
            <h5>Electronics<DownOutlined /></h5>
            </Tippy>
            </div>
            </div>
            <div className="images">
            <img class="Img" alt="Home" src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"/>
            <div><h5>Home</h5></div>
            </div>
            <div className="images">
            <img class="Img" alt="Appliances" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"/>
            <div><h5>Appliances</h5></div>
            </div>
            <div className="images">
            <img class="Img" alt="Travel" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"/>
            <div><h5>Travel</h5></div>
            </div>
            <div className="images">
            <img class="Img" alt="Beauty, Toys &amp; More" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"/>
            <div><h5>Beauty, Toys &amp; More</h5></div>
            </div>
</div>
         <div>
            <Slider />
        </div> 
        </div>
    )
}

export default Header;