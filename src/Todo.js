import React, { useState } from "react";

//import {Plus} from "../node_modules/@fortawesome/fontawesome-free/svgs/"

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [item, setitem] = useState([]);

  const addItem = () => {
    if (!inputdata) {
    } else {
      setitem([...item, inputdata]);
      setInputdata("");
    }
  };

  const deleteitem = (id) =>{
      const updateitem = item.filter((element,index) => {
          return index !== id ;
      });
      setitem(updateitem)

  }

  const removeall =() => {
    setitem([])
  }


  return (
    <>
      <div>
        <div>
          <figure>
            <img src="" alt="todo image" />
            <figcaption> Add Your list Here ✌️</figcaption>
          </figure>
          <div>
            <input
              type="text"
              placeholder="✍️ Add items..."
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <i
              className="fas fa-plus add-btn"
              title="add item"
              onClick={addItem}
            />
          </div>
          <div>
            {item.map((element, index) => {
              return (
                <div key={index}>
                  <h3>{element}</h3>
                  <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => deleteitem(index)} />
                </div>
              );
            })}
          </div>

          <div>
            <button className="btn " data-sm-link-text="" onClick={removeall}>
              <span>Check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
