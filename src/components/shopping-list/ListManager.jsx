import {useState} from "react";

import ListDisplay from "./ListDisplay";

const ListManager = () => {

  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [quant, setQuant] = useState(1);

  const addItem = () => {
    setData((currentData) => {
      return [...currentData, {
        item: item,
        quantity: quant
      }];
    });

    setItem("");
    setQuant(1);
  }

  const removeItem = (index) => {
    let tempArray = data;
    tempArray.splice(index, 1);
    setData(() => {
      return tempArray;
    });
  }

  return (
    <>
      <input type="text" name="itemAdder" onChange={(event) => setItem(event.target.value)} value={item} placeholder="Enter a new item here" />
      <label htmlFor="itemQuantity"> Quantity: </label>
      <input type="number" name="itemQuantity" onChange={(event) => setQuant(event.target.value)} value={quant} />
      <button type="button" onClick={addItem}>Add</button>
      <br/>
      <button type="button" onClick={() => setData([])}>Clear</button>
      <ListDisplay data={data} remove={removeItem} />
    </>
  )
}

export default ListManager;
