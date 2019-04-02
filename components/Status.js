import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <button className="status" >
        {this.props.winner}
      </button>
    );
  }
}
