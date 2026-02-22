import MenuItem from "../MenuItem"

const MenuApp = () => {
  let menuItem = {         
    "itemId": 1,         
    "itemPrice": "12",         
    "itemName": "Lasagne",         
    "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions." 
  }
  return (
    <div className="App">
      <MenuItem items={menuItem}></MenuItem>
    </div>
  )
}

export default MenuApp