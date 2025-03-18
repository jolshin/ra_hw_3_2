import "./App.css";
import Listing from "./components/Listing";
import data from "./bin/etsy.json";

const items = JSON.parse(JSON.stringify(data));

function App() {
  return (
    <>
      <Listing items={items} />
    </>
  );
}

export default App;
