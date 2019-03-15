import React from 'react';

const Btn = ({text, handleClick}) => {
      return <div>
          <span className="btn btn-primary" onClick={handleClick}>{text}</span>
      </div>
};

export default Btn;