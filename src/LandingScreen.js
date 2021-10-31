import React from 'react';
import "./LandingScreen.css";
import "antd/dist/antd.css";
import { Input, Space } from 'antd';
import { Popover, Button } from 'antd';

const { Search } = Input;

function LandingScreen() {
    let zomotobackground ="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
    let zomotologo ="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
//    function  changeVisibleOfPopup(){
//        setvisiblePopUp();
//    }
  return (
    <div className="LandingScreen">
       <img src={zomotobackground}></img>
      <div className="Landing-heading">
          <img src={zomotologo}></img>
          <h2>Discover the best food & drinks in Chennai</h2>
          <div className="Landing-inputSearch">
           <Space align="center">
             <Popover
            //   content={<a onClick={hide}>Close</a>}
              title="Title"
              trigger="click"
            //   visible={visiblePopUp}
            //   onVisibleChange={changeVisibleOfPopup}
            >
            <Search
             placeholder="input search text"
             allowClear
            //  onSearch={onSearch}
             style={{ width: 500 }}
            />
            </Popover>
           </Space>
          </div>
      </div>
    
    </div>
  );
}

export default LandingScreen;
