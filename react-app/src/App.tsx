import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/";
import { useState } from 'react';
import Love from "./components/Love";


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
  </>)
    
}

// must export the element
export default App;