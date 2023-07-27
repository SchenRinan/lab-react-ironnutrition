import { Divider, Input } from "antd";
import { useState } from "react";

const AddFoodForm = (props) => {
    const [storeName, setName] = useState('');
    const [storeImage, setImage] = useState('');
    const [storeCal, setCal] = useState('');
    const [storeSer, setSer] = useState('');

    const storeFood = e =>{
        e.preventDefault();
        props.createFood({
            name: storeName,
            image: storeImage,
            calories: storeCal,
            servings: storeSer
        })
    }

    return ( 
        <form>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={undefined} type="text" onChange={(e) => {setName(e.target.value)}} placeholder='Name of Food'/>

            <label>Image</label>
            <Input value={undefined} type="text" onChange={(e) => {setImage(e.target.value)}} placeholder='http://example.com/image/of/food'/>

            <label>Calories</label>
            <Input value={undefined} type="number" onChange={(e) => {setCal(e.target.value)}} />

            <label>Servings</label>
            <Input value={undefined} type="number" onChange={(e) => {setSer(e.target.value)}} />

            <button type="submit" onClick={storeFood}>Create</button>
        </form>
    );
}
 
export default AddFoodForm;