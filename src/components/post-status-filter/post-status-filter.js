import React, {Component} from 'react';
import { Button } from "reactstrap";

export default class PostStatusFilter extends Component{
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравилось'}
    ]
  }

  render() {
    const {filter, onFilterSelect} = this.props
    const btns = this.buttons.map(({name, label}) => {
      const active = filter === name;

      return (
        <Button
          outline={active ? false : true}
          key={name}
          color="info"
          onClick={() => onFilterSelect(name)}
        >{label}</Button>
      )
    });

    return (
      <div className="btn-group">
        {btns}
      </div>
    )
  }
}

