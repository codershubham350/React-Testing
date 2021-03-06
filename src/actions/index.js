import axios from 'axios';
import React from 'react';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export async function fetchComments() {
  const response = await axios.get(
    'http://jsonplaceholder.typicode.com/comments'
  );

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
