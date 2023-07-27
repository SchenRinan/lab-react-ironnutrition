import './App.css';
import { Row, Divider } from "antd";
import { useState } from 'react';

import foods from "./foods.json";

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodDB, setFood] = useState(foods);
  const createFood = item =>{
    setFood([item ,...foodDB])
  }

  return (
    <div className="App">
      <AddFoodForm createFood = {createFood}/>
      <Search/>
      {/* <Button> Hide Form / Add New Food </Button> */}



      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodDB.map(item => <FoodBox food={item} />)}
      </Row>
      {/* <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} /> */}
    </div>
  );
}

export default App;
