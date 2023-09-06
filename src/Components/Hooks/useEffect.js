import React, {useState, useEffect } from 'react'; //import react from react component export
import "./HookStyle.css";

const UseEffect = () => {
  // const initialData = 10;
  const [myNum, setmyNum] = useState(0);
  console.log(myNum);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className='center_div'>
        <p>{ myNum }</p>
        <div class="button2" onClick={() => setmyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
      </div>
    </>
  )
}

export default UseEffect;