import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import './Dropdown.css'; // Create a CSS file for styling

const Dropdown = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleDropdown = (itemId) => {
    setOpenItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const items = [
    {id:1 , title:"hello", description:"this is description"},
    {id:2 , title:"hello", description:"this is description"},
    {id:3 , title:"hello", description:"this is description"},
    {id:4 , title:"hello", description:"this is description"},
    {id:5 , title:"hello", description:"this is description"},
    {id:6 , title:"hello", description:"this is description"},
  ]

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="dropdown-container">
          <button onClick={() => toggleDropdown(item.id)}>
            {item.title}
          </button>
          <CSSTransition
            in={openItemId === item.id}
            timeout={300}
            classNames="dropdown"
            unmountOnExit
          >
            <div className="dropdown-content">
              {/* Dropdown content goes here */}
              <p>{item.description}</p>
            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
