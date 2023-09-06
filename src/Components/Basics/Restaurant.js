import React, {useState} from 'react';
import "./Restaurant.css";
import Menu from "./menuAPI.js";
import MenuCard from './menuCard';
import Navbar from "./Navbar";
//'...' is a spread operator it is used to convert the array with pure data and not of objects.
const uniqueList = [
  ...new Set( 
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
    // const myStyle = {color:"black"};

  const [MenuData, setMenuData] = useState(Menu); 
  const [menuList] = useState(uniqueList);
 
  const filterItem = (category) => {
    if(category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
     setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard MenuData={MenuData} /> 
    </>
  )
}

export default Restaurant;

//MenuCard MenuData={MenuData} this method of passing data from one component to other component i.e., 
//from parent to child. Th










