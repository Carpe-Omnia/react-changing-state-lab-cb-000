import React from 'react';

const Field = (props) => {
    return (
      <button className="field" onClick={event => this.props.onClick(this.props.index, event) } >
        {this.props.player}
      </button>
    );
}
//this is a field
export default Field
