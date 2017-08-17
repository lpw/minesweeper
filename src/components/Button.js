import React from 'react';
import '../css/Button.css';

function Button(props) {
    const {onClick, children} = props;

    return (
      <div className="Button" onClick={onClick}>
        {children}
      </div>
    );
}

export default Button;
