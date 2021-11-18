import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handle actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  };

  const newState = commentsReducer([], action);

  // here we will receive an array of states
  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  // Here commentsReducer will receive action of any type and will not throw any error
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
