import React from 'react';
import './Row.css';

function Row ({ children, label }) {
  return (
    <div className="Row">
      <div className="label">{label}</div>
      <div className="children">
        {children}
      </div>
    </div>
  );
}

export default Row;
