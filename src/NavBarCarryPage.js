import React from 'react';
import { useState } from 'react';
import "./LandingScreen.css";
import "antd/dist/antd.css";
import { Input, Space } from 'antd';
import { Popover, a } from 'antd';
import { Tag } from 'antd';
import { Card } from 'antd';
import './NavBarCarryPage.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Meta } = Card;


function NavBarCarryPage(props) {
    var [visiblePopUp, setvisiblePopUp] = useState(false);
    var [clickedTagName, setclickedTagName] = useState("");
    var [IsTextInsidesearchInput, setIsTextInsidesearchInput] = useState(false);
    var [captureSearchText, setCaptureSearchText] = useState("");
    var [filteredUserFoodSearch, setFilteredUserFoodSearch] = useState([]);

    // let zomotobackground ="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png";

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );

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
                return f.food_name.includes(userSearch)
            })
            accumulator.push(...userNonVeg)
            return accumulator
        }, [])

        setFilteredUserFoodSearch(filterNonVegItems);
    }
    function createContentPopUp() {
        return (
            <div>{IsTextInsidesearchInput === false ? (
                <div >
                    <Tag>
                        <a onClick={(e) => {
                            headleTagClick(e.currentTarget.innerText)
                        }}>Link</a>
                    </Tag>

                </div>
            ) : (
                <div>
                    {filteredUserFoodSearch.map((e) => (
                        <div className="NavCard">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://b.zmtcdn.com/data/images/cuisines/unlabelled/8f14e45fceea167a5a36dedd4bea2543.jpg" />}
                            >
                                <Meta
                                    title={e.food_name}
                                    description={e.price}
                                />
                            </Card>,

                        </div>
                    ))}

                </div>)
            }
            </div>

        )
    }

    return (
        <div className="NavBarMainContaier">
            <div className="Title">
               <h2>zomato</h2>
            </div>
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
        <div className="NavBarProfile">
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Login <DownOutlined />
    </a>
  </Dropdown>
  </div>
        </div>
    );
}

export default NavBarCarryPage;
