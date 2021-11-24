import React from 'react';
import { Card } from 'antd';
import './ListOfItems.css';
const { Meta } = Card;
function ListOfItems(props) {
    return (
        <div className="ListOfItems">
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src="https://b.zmtcdn.com/data/pictures/5/19216105/5ada3d7d13dc368e52683df8f41f55c6.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" />}
            >
                <div className="metalist">
                <Meta  title={props.data.food_name} description={props.data.price} />
                <Meta description={props.data.votes} />
                </div> 
            </Card>
        </div>
    );
}

export default ListOfItems;