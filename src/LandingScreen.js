import React from 'react';
import { useState } from 'react';
import "./LandingScreen.css";
import "antd/dist/antd.css";
import combineddata from "./imagesBackend";
import { Input, Space } from 'antd';
import { Popover, a } from 'antd';
import { Tag } from 'antd';
import { Card } from 'antd';
import { useHistory } from "react-router-dom";


const { Search } = Input;
const { Meta } = Card;


function LandingScreen(props) {
  const history = useHistory();
  var [visiblePopUp, setvisiblePopUp] = useState(false);
  var [clickedTagName, setclickedTagName] = useState("");
  var [IsTextInsidesearchInput, setIsTextInsidesearchInput] = useState(false);
  var [captureSearchText, setCaptureSearchText] = useState("");
  var [filteredUserFoodSearch, setFilteredUserFoodSearch] = useState([]);

  let zomotobackground = "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png";

  function changeVisibleOfPopup() {
    setvisiblePopUp(true);
  }
  function toHide() {
    setvisiblePopUp(false);
  }
  function headleTagClick(nameoftag) {

    setclickedTagName(nameoftag);

  }
  
  function filterTheFoodItems(userSearch) {
    let filterNonVegItems = props.all_data.reduce((accumulator, currentObjectLoop) => {
      let userNonVeg = currentObjectLoop.menu_available.non_veg.filter(f => {
        return f.food_name.toLowerCase().includes(userSearch.toLowerCase())
      })
      accumulator.push(...userNonVeg)
      return accumulator
    }, [])
   let tounshiftcategory = filterNonVegItems[0].food_name.split(" ").map(e=>{
     if(e.toLowerCase().indexOf(userSearch.toLowerCase()) != -1){
       return e
     }
   }).filter(o=>{return o != undefined})[0];
   let unshiftObj = {
     food_name : tounshiftcategory, 
     votes : "100",
     price : "200",
     category : "Category"
   }
   filterNonVegItems.unshift(unshiftObj);
   filterNonVegItems.forEach((a) => {
     a.imagesBackendData = combineddata[Math.floor(Math.random() *19)];
   });
    setFilteredUserFoodSearch(filterNonVegItems);
  }
  function handleCardClick(uniquecarddata){
    history.push({
      pathname: "/category-nv",
      state: uniquecarddata.food_name
    });
  }

  function createContentPopUp() {
    return (
      <div>{IsTextInsidesearchInput === false ? (
        <div>
          <Tag>
            <a onClick={(e) => {
              headleTagClick(e.currentTarget.innerText)
            }}>Link</a>
          </Tag>

        </div>
      ) : (
        <div>
          {filteredUserFoodSearch.map((e) => (
            <div className="CardHolder" onClick={()=>{handleCardClick(e)}}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={e.imagesBackendData}/>}
              >
                <Meta
                  title={e.food_name}
                  description={e.category ? e.category : e.price}
                />
              </Card>

            </div>
          ))}

        </div>)
      }
      </div>

    )
  }

  return (
    <div className="LandingScreen">
      <img className="backimg" src={zomotobackground}></img>
      <div className="Landing-heading">
        <h1>zomato</h1>
        <h2>Discover the best food & drinks in Chennai</h2>
        <div className="Landing-inputSearch">
          <Space align="center">
            <Popover
              content={createContentPopUp}
              title="Recent Items"
              trigger="click"
              visible={visiblePopUp}
              placement="bottom"
              onVisibleChange={changeVisibleOfPopup}
            >
              <Search
                onChange={(e) => {
                  filterTheFoodItems(e.currentTarget.value);
                  setIsTextInsidesearchInput(true)
                }}
                // value={clickedTadName}
                placeholder="Search for restaurant, cuisine or a dish"
                allowClear
                onBlur={toHide}
                //  onSearch={onSearch}
                style={{ width: 600 }}
              />
            </Popover>
          </Space>
        </div>
      </div>
     <combineddata/>
    </div>
    
  );
}

export default LandingScreen;
