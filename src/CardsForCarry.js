// import React from 'react';
import { Badge, Card } from 'antd';
import "./CardsForCarry.css";
import combineddata from "./imagesBackend";

import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Carousel } from 'antd';
import { Rate, Space, Spin } from 'antd';
const { Meta } = Card;


function CardsForCarry(props) {
    const history = useHistory();
    const contentStyle = {
        height: '70px',
        // width: '100px',
        color: 'black',
        // lineHeight: '160px',
        textAlign: 'center',
        background: 'white',
    };
    const historyCarry = useHistory();
    console.log(historyCarry);
    var [hotelKeywordData, setHotelKeywordData] = useState([]);

    useEffect(() => {
        let backendData = props.all_data;
        let filterHoltels = backendData.map(o => {
            let searchedAvailabe = o.menu_available.non_veg.filter(e => {
                return e.food_name.includes(historyCarry.location.state)
            });
            if (searchedAvailabe.length > 0) {
                return { ...o }
            }
        }).filter(e => { return e != undefined });
        debugger
        filterHoltels.forEach((a) => {

            a.imagesBackendData = combineddata[Math.floor(Math.random() *19)];
          });
          console.log(filterHoltels)
          setTimeout(() => {
         setHotelKeywordData(filterHoltels)
              
          }, 1000);

    }, [])
function cardCarryClick(clickCard){
    debugger
    history.push({
        pathname: "/resort",
        state: clickCard
      });
     
}
    return (
        <div>
            {hotelKeywordData == 0 ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
            ) : (
        <div className="CardsFor-MainContainer">
            <h2>{historyCarry.location.state}Delivery Restaurants in Thiruporur, Chennai, India</h2>
            <div className="Card-content">
                {hotelKeywordData.map(o => (
                    <div className="CardItems" onClick={()=>{cardCarryClick(o)}}>
                        <Badge.Ribbon text={(o.offer_available).split("-")[0] + " off"} placement="start">
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="photo" src={o.imagesBackendData} />}
                            >
                            <div className="Cardminutes">
                                    <Badge  count={Math.floor(Math.random() * 30) + " mins"}></Badge>
                                </div>
                                <div className="CardName">
                                    <div className="MetaCard">
                                    <Meta title={o.hotel_name} description={" ₹ " + o.average_price_to_order} /> 
                                    
                                    <Meta description={o.kind_of_food_available.split(",")[Math.floor(Math.random() * o.kind_of_food_available.split(",").length)]}/>
                                    </div>
                                     <div className="rate-Card">
                                        <Rate disabled defaultValue={Math.floor(Math.random() * (5-2) + 2)} /></div>
                                        <hr></hr>
                                    <Carousel autoplay effect="fade">
                                        <div className="CarouselText">
                                            
                                            <h5 style={contentStyle}>Follows all Max Safety measures to ensure your food is safe</h5>
                                            <img className="OfferTag" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"></img>
                                        </div>
                                        <div>
                                            <h5 style={contentStyle}>4500+ orders placed from here recently</h5>
                                        </div>

                                    </Carousel>
                                </div>
                            </Card>
                        </Badge.Ribbon>
                    </div>
                ))}

            </div>

            <combineddata/>
        </div>
             )}
              </div>
    );
}

export default CardsForCarry;