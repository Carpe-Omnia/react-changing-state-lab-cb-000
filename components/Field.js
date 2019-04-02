import React from 'react';

const Field = (props) => {
    return (
      <button className="field" onClick={event => props.onClick(props.index, event) } >
        {props.player}
      </button>
    );
}
//this is a field
export default Field
