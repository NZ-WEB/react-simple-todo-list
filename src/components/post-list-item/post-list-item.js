import React, {Component} from 'react';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      liked: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({important}) => ({
      important: !important
    }))
  }

  onLike() {
    this.setState(({liked}) => ({
      liked: !liked
    }))
  }

  render() {
    const {label} = this.props;
    const {important, liked} = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (liked) {
      classNames += ' like';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
      <span
        className="app-list-item-label"
        onClick={this.onLike}
      >
        {label}
      </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i
            className="fa fa-heart"
          ></i>
        </div>
      </div>
    )
  }
}

