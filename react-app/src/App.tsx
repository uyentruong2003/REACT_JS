import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // ============== define the props for list group =================
  // define items:
  let items = ['New York','San Francisco','Tokyo','London','Paris'];
  // define the onSelectItem function
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  // ============== define the props for alert =================
  const handleButtonOnClick = () => {
    console.log("Button is clicked!");
  }


  return (
  <div>
    {/* The children props allows adding a children (h4  tag) of "Hello World" */}
    <Alert>
      <h4>Hello World!</h4>
    </Alert> 
    <ListGroup items={items} heading="City List" onSelectItem={handleSelectItem}/>
    <Button color="warning" handleOnClick={handleButtonOnClick}>Click Me!</Button>
  </div>)
}

// must export the element
export default App;