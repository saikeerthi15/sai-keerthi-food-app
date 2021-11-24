import React from 'react';
import { Breadcrumb } from 'antd';
import './Breadcrumb.css';


function BreadcrumbCarryPage(props) {
    return (
        <div className="Breadcrumb-MainContainer">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">India</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Chennai</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Restaurants</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbCarryPage;