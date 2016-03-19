import React from 'react';
import { assert } from 'chai';
import { render } from 'enzyme';
import Book from '../src/Book';

describe("Book", () => {
  it("render text", () => {
    const wrapper = render(<Book author="Dan Abramov" title="Redux and ReactJS" />);

    assert.equal(wrapper.text(), 'Redux and ReactJS by Dan Abramov');
  });
});
