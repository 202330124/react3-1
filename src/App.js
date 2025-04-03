import MyB from "./MyButton.js";
import { Button1, Button3 } from "./ButtonLib.js";
import AboutPage from "./AboutPage.js";
import Profile from "./Profile.js";
import Shopping from "./ShoppingList.js";
import CountState from "./CountState.js";
import "./App.css";

import { useState } from "react";

function CountState2({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Clicked { count } times
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="wrapper">
      <h1>Hello React</h1>
      <div>
        <p>Default Export Example</p>
        <MyB />

        <p>Named Export Example</p>
        <Button1 />&nbsp;
        <Button3 />

        <p>Wrapping Example</p>
        <AboutPage />

        <p>Displaying Data</p>
        <Profile />
        
        <p>Rendering Lists</p>
        <Shopping />
      </div>
      <div>
        <p>Updating the screen</p>
        <CountState />
        <CountState />
        <CountState />
      </div>
      <div>
        <p>Sharing data between components</p>
        <CountState2 count={ count } onClick={ handleClick } />
        <CountState2 count={ count } onClick={ handleClick } />
      </div>
    </div>
  );
}