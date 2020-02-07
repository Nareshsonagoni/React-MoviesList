import React from "react";

const ListGroup = props => {
  let { items, onListChange } = props;
  return (
    <ul className="list-group">
      {items.map(g => (
        <li
          key={g._id}
          className="list-group-item"
          onClick={() => onListChange(g.name)}
          style={{ cursor: "pointer" }}
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
