import './App.css';
import { Row, Divider, Button } from "antd";
import { useState } from 'react';
import { v4 } from 'uuid';

import foods from "./foods.json";

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodDB, setFood] = useState(foods);
  const [foodSearch, setSearch] = useState(foodDB);
  const [hideForm, setForm] = useState(false);
  const [emptyArray, setEmpty] = useState(false);

  const createFood = item =>{
    if(emptyArray === true){
      setEmpty(false)
    }
    setFood([item ,...foodDB])
  }
  const findFood = item =>{
    setFood(foodSearch.filter(filtrate => filtrate.name.toLowerCase().includes(item.target.value.toLowerCase())));    
  }
  const deleteFood = item =>{
    setFood(foodDB.filter(filtrate => filtrate.name !== item));
    setSearch(foodDB.filter(filtrate => filtrate.name !== item));
    console.log(foodDB.length)
    if(foodDB.length <= 1){ setEmpty(true); }
  }

  return (
    <div className="App">
      { hideForm ? <AddFoodForm createFood = {createFood} style = {{width: '50%'}}/> : '' }
      <Divider/>
      <Button onClick={()=> setForm(hideForm ? false : true )}> { hideForm ? 'Hide Form' : 'Add New Food' } </Button>
      <Search findFood = {findFood}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodDB.map(item => 
          <FoodBox
            food={item}
            key = { v4() }
            deleteFood = {deleteFood}
          />)}
          { emptyArray ? 'Oops there are no contents to show' : '' }
      </Row>
    </div>
  );
}

export default App;
