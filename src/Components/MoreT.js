import React from 'react'
import {BellTwoTone,QuestionCircleTwoTone,ShoppingTwoTone,RiseOutlined,ArrowDownOutlined} from '@ant-design/icons';
import './MoreT.css';

const MoreT = () => {
    return (
        <div className="moret">
            <div className="moret__in">
            <BellTwoTone style={{marginRight:"10px"}}/>
            <p>Notification Preferences</p>
            </div>
            <hr />
            <div className="moret__in">
                <QuestionCircleTwoTone style={{marginRight:"10px"}}/>
                <p>Sell on Flipkart</p>
            </div>
            <hr />
            <div className="moret__in">
                < ShoppingTwoTone style={{marginRight:'10px'}}/>
                <p>24*7 Customer Care</p>
            </div>
            <hr />
            <div className="moret__in">
                < RiseOutlined style={{marginRight:"10px"}}/>
                <p>Advertise</p>
            </div>
            <hr />
            <div className="moret__in">
                <ArrowDownOutlined  style={{marginRight:"10px"}}/>
                <p>Download App</p>
            </div>
        </div>
    )
}

export default MoreT
