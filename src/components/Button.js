import React from 'react';
import '../css/Button.css';

function Button(props) {
    const {onClick, content} = props;

    return (
      <div className="Button" onClick={onClick}>
        {content}
      </div>
    );
}

export default Button;
