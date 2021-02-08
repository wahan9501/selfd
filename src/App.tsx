import Button from "@material-ui/core/Button";
import React from "react";
import "./App.css";
import { ITODOItemProps, TODOItemStatus } from "./components/TODOItem";
import { TODOList } from "./components/TODOList";

function App() {
  const items: ITODOItemProps[] = [
    { title: "event 1", status: TODOItemStatus.Undo },
    { title: "event 2", status: TODOItemStatus.Undo },
  ];

  return (
    <TODOList items={items} />
    // <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
  );
}

export default App;
