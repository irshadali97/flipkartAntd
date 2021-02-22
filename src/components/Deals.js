import React from "react";
import 'antd/dist/antd.css';
import "./Deals.css"
import { Button } from 'antd';

function Deals() {
    return (
        <div>
            <div>
                <div className="dealsHeader">
                <h2>Deals of the Day</h2>
                <Button type="primary">View All</Button>
                </div>
                <div className="dealsMain"></div>
            </div>
        </div>
    );
}
export default Deals;