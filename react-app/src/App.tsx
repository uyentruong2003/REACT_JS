import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/";
import { useState, useEffect } from 'react';
import Love from "./components/Love";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


function App() {
  // ============== List Group Example =================
  // define items:
  let items = ['New York','San Francisco','Tokyo','London','Paris'];
  // define the onSelectItem function
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  // ============== Display Alert by clicking button Exercise =================
  //hook to toggle disabledState of the alert
  const [alertVisible, setAlertVisibility] = useState(false);
  const [buttonColor, setButtonColor] = useState("primary");
  // define the handleOnClick
  const handleButtonOnClick = () => {
    console.log("Button is clicked!");
    // switch button color to secondary if it's currently primary and vice versa
    buttonColor==="primary" ? setButtonColor("secondary") : setButtonColor("primary");
    // switch alert disabled to the opposite of its current state
    setAlertVisibility(!alertVisible);
  }

  // state hook with arrays
  const [myArr, setMyArr] = useState(['A','B','C']);

  const addToArr = async () => {
    setMyArr([...myArr,'new item']);
    console.log(myArr);
  }

  const removeFromArr = async () => {
    setMyArr(myArr.filter(item => item !== "new item"));
    console.log(myArr);
  }

  const updateArr = async () => {
    setMyArr(myArr.map(item => item === "new item" ? "D":item));
    console.log(myArr);
  }

  useEffect(() => {
    console.log(myArr);
  }, [myArr]); // This useEffect will run every time myArr changes

  
  // State hook between different components:
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2', 'Product 3']);



  return (
  <>
    {/* The children props allows adding a children (h4  tag) of "Hello World" */}
    <ListGroup items={items} heading="City List" onSelectItem={handleSelectItem}/>

    {/* Button which is clicked to display the alert */}
    <Button color={buttonColor} onClick={handleButtonOnClick}>Click Me!</Button>
    {/* alertVisible is toggled whenever the button is clicked --> alertVisible then is passed into the alert */}
    <Alert visible={alertVisible}>
      <h4>Hello World!</h4>
    </Alert>

    {/* Try adding an icon from the react icon library */}
    <Love onLoveClick={() => {console.log("Love icon is clicked")}}></Love>
    <div>
      {/* Buttons to modify a state hook with arrays */}
      <Button color="primary" onClick={addToArr}>Add To Array</Button>
      <span>  </span>
      <Button color="primary" onClick={removeFromArr}>Remove Array</Button>
      <span>  </span>
      <Button color="primary" onClick={updateArr}>Update Array</Button>
    </div>
    {/* Print out the list */}
      <Alert visible>{myArr.map(item => item+", ")}</Alert>
    
    {/* State Hook between different components */}
    <NavBar cartItemCount={cartItems.length}></NavBar>
    <Cart items={cartItems} onClear={()=> setCartItems([])}></Cart>


  </>)
    
}
// must export the element
export default App;