// Full DOM testing using Enzyme
import React from 'react';
import Root from 'Root';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import '../../setupTest';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

// cleanup test after each test runs
afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two buttons', () => {
  // console.log(wrapped.find("textarea").length);
  // console.log(wrapped.find("button").length);

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('The text area', () => {
  beforeEach(() => {
    // when the value in the <textarea/> changes
    wrapped.find('textarea').simulate('change', {
      // inside event object we are referring target.value property
      target: { value: 'New Comment' },
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    /*Here we are checking that the textarea value is being changes and when it is being changed it is shared with form
    and then once form is submitted it is checking that after form submission textarea is getting emptied or not */

    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual(' ');
  });
});
