import React from 'react';
import { assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BookList from '../src/BookList';

describe("BookList", () => {
  const books = [
    { title: 'ReactJS for dummies', author: 'guidsen' },
    { title: 'Redux and ReactJS', author: 'Dan Abramov' }
  ];

  it("display category title", () => {
    const wrapper = render(<BookList category="ReactJS" items={books} />);

    assert.equal(wrapper.find('h1').text(), 'Books in ReactJS (2)');
  })

  it("render book items", () => {
    const wrapper = render(<BookList items={books} />);

    assert.equal(wrapper.find('#items div').length, 2);
  });
});
