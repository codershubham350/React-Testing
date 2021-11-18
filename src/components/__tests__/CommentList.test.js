import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';
import '../../setupTest';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  // Here we are passing initialState to the store as a prop so when component renders it will get
  // two comments defined in the initialState and when mapStateToProps is called then CommentList will
  // fetch comments from the initialState
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LIST per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text of each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
