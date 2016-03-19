import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Book extends Component {
  render() {
    const { author, title } = this.props;

    return (
      <div>{title} by {author}</div>
    );
  }
}

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
}

export default Book;
