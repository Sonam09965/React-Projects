import React, { useState, useEffect} from 'react';
import "./todostyle.css";

// Function to get our local storage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist")

  if(lists){
    return JSON.parse(lists);
  }
  else{
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItems] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  //function to add items
  const addItem = () => {
    if(!inputdata){
      alert('plz fill the data')
    } else if(inputdata && toggleButton){
      setItems(
        items.map((currElem) => {
          if(currElem.id === isEditItem){
            return{...currElem, name:inputdata};
          }
          return currElem;
        })
      )
     setInputData([]);
     setIsEditItems(null);
     setToggleButton(false);
    }
    else{
      const myNewInputData = {
        id:new Date().getTime().toString(),
        name:inputdata
      }
      setItems([...items, myNewInputData])
      setInputData("");
    }
  }
  // Function to edit items 
  const editItem = (index) => {
     const item_todo_edited = items.find((currElem) => {
      return currElem.id === index;
     });
     setInputData(item_todo_edited.name);
     setIsEditItems(index);
     setToggleButton(true);
  };
  // Function to delete items
  const deleteItem = (index)=> {
    const updatedItems = items.filter((currElem) => {
      return currElem.id !== index;
    })
    setItems(updatedItems)
  };
  // To remove all the elements
  const removeAll = () => {
    setItems([]);
  };
  // Adding local storage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items))
  }, [items])
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="./image/todo.svg" alt="todologo" />
                <figcaption>Add Your List Here</figcaption>
            </figure>
            <div className='addItems'>
              <input type='text' 
              placeholder="✍️ Add Item" 
              className='form-control'
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}/>
              {toggleButton ? (
                <i class="far fa-edit add-btn" onClick={addItem}></i>
                ) : (
                  <i class="fa fa-plus add-btn" onClick={addItem}></i>
              )}
            </div>
            {/* show our all items */}
            <div className="showItems">
              {items.map((currElem, index) => {
                return (
                  <div className="eachItem" key={index.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i class="far fa-edit add-btn" onClick={() => editItem(currElem.id)}></i>
                    <i class="far fa-trash-alt add-btn" onClick={() => deleteItem(currElem.id)}></i>
                  </div>
                </div>
                );
              })}
            </div>
            {/* remove all items button */}
            <div className='showItems'>
                 <button className='btn effect04'data-sm-link-text="Remove All" onClick={removeAll}>
                  <span>CHECK LIST</span>
                 </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
