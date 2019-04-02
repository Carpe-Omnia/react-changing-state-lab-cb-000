import React from 'react';

export default class Field extends React.Component {
  render () {
    return (
      <button className="field" onClick={event => this.props.onClick(this.props.index, event) } >
        {this.props.player}
      </button>
    );
  }
}
//this is a field
