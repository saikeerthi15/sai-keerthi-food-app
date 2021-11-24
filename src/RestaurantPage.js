import React from 'react';
import ListOfItems from './ListOfItems';
import NavBarCarryPage from './NavBarCarryPage';
import ResortImg from './ResortImg';
import './Resort.css';
import { useHistory } from "react-router-dom";

function RestaurantPage(props) {
    const history = useHistory();
    const baseObject = history.location.state;
    return (
        <div className="MainRestaurant">
            <NavBarCarryPage />
            <ResortImg />
            <div className="RestaurantDetails">
                <h2 className="head">{baseObject.hotel_name}</h2>
                <h3>{baseObject.kind_of_food_available}</h3>
                <h4>{baseObject.average_price_to_order}</h4>
                <p>{baseObject.offer_available}</p>
                <div className="List">
                {baseObject.menu_available.non_veg.map(p=>(
                <ListOfItems data = {p}/>
                ))}
</div>
            </div>
            
        </div>
    );
}

export default RestaurantPage;