import React from 'react';
import { Card, Space, Spin } from 'antd';
import { Rate } from 'antd';
import './ListOfItems.css';
const { Meta } = Card;
function ListOfItems(props) {
    return (
        <div>
             <Space size="middle">
          <Spin size="large" />
          </Space>
        
        <div className="ListOfItems">
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src="https://b.zmtcdn.com/data/pictures/5/19216105/5ada3d7d13dc368e52683df8f41f55c6.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" />}
            >
                <div className="metalist">
                <Meta  title={props.data.food_name} description={"Price: ₹ "+ props.data.price} />
                <Meta description={" Vote: "+ props.data.votes} />
                </div> 
                <div className="itemRate">
                  <Rate disabled defaultValue={Math.floor(Math.random() * (5-2) + 2)} /></div>
                
            </Card>
        </div>
        </div>
    );
}

export default ListOfItems;