import React from 'react';
import { Tag, Divider } from 'antd';
import "./TagsForCarry.css"

function TagsForCarry(props) {
    return (
        <div>
            <div className="Tags-Container">
            <Tag color="#2db7f5">Filters</Tag>
            <Tag color="#2db7f5">Mutton Biryani</Tag>
            <Tag color="#2db7f5">Delivery Time</Tag>
            <Tag color="#2db7f5">Rating</Tag>
            <Tag color="#2db7f5">Great Offers</Tag>
            <Tag color="#2db7f5">Cuisines</Tag>
            <Tag color="#2db7f5">More filters</Tag>
                
            </div>
        </div>
    );
}

export default TagsForCarry;