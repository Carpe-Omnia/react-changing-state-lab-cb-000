import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  constructor(props) {
    super(props) ;
    this.showThing = this.showThing.bind(this) ;
  }
  showThing(index){
    if (this.props.board[index] === null) {
      return(<Field handleClick={this.props.handleClick} player={null} index={index} />)
    }
    else {
      return (<Field handleClick={this.props.handleClick} player={this.props.board[index]} index={index} />)
    }
  }

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board" >
        <div>
          <Field handleClick={this.props.handleClick} player={this.props.board[0]} index={0} />
          <Field handleClick={this.props.handleClick} player={this.props.board[1]} index={1} />
          <Field handleClick={this.props.handleClick} player={this.props.board[2]} index={2} />
        </div>
        <div>
          {this.showThing(3)}
          {this.showThing(4)}
          {this.showThing(5)}
        </div>
        <div>
          {this.showThing(6)}
          {this.showThing(7)}
          {this.showThing(8)}
        </div>
      </div>
    );
  }
}
