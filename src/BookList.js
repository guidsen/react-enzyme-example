import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

class BookList extends Component {
  render() {
    const { category, items = [] } = this.props;

    const bookItems = items.map((book, index) => {
      return <Book key={index} author={book.author} title={book.title} />;
    });

    return (
      <div>
        <h1>Books in {category} ({items.length})</h1>
        <div id="items">
          { bookItems }
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  category: PropTypes.string,
  items: PropTypes.array,
}

export default BookList;
