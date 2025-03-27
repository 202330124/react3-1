import MyB from "./MyButton.js";
import { Button1, Button3 } from "./ButtonLib.js";
import AboutPage from "./AboutPage.js";
import Profile from "./Profile.js";
import Shopping from "./ShoppingList.js";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello React</h1>
      <MyB /><br />
      <Button1 />&nbsp;
      <Button3 />
      <AboutPage />
      <Profile />
      <Shopping />
    </div>
  );
}