import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

// let items = ["Dhaka", "New York", "Paris", "London", "Tokyo"];
// const handleSelectItem = (item: string) => {
//   console.log(item);
// };

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello
        <span>World!</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
};

export default App;
