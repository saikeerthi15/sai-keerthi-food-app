import './App.css';
import axios from 'axios';
import LandingScreen from './LandingScreen';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NextPage from './NextPage';
import RestaurantPage from './RestaurantPage';


function App() {
  var [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    async function getFoodData() {
      var foodData = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/allResorts");
      console.log(foodData.data);
      setRestaurantData(foodData.data)
    }
    getFoodData()
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <LandingScreen all_data={restaurantData} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/category-nv">
            <NextPage all_data={restaurantData}/>
          </Route>

        </Switch>
        <Switch>
          <Route path="/resort">
          <RestaurantPage/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
