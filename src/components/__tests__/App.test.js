import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import '../../setupTest';

// we will reassign value of wrapped
let wrapped;

// before running every single test beforeEach() will exceute and perform common setup test
beforeEach(() => {
  wrapped = shallow(<App />);
});

// Shallow testing using Enzyme
it('shows a comment box', () => {
  // Here we are checking that if Comment Box have length Equal to 1(it only has one component)
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// expect(div.innerHTML).toContain("Comment Box");

/*Here we are checking the hard coded value 'Comment Box' which would not be an idle approach to test,
instead what we can do is instead of checking the internal workings of CommentBox we can check if CommentBox.test.js
exists if it exsits that's it we 're done from our end.

const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there
  //console.log(div.innerHTML);
  expect(div.innerHTML).toContain("Comment Box");
  //expect(div).toHaveAnInstanceOf(CommentBox);

  // Cleanup the JSDOM
  ReactDOM.unmountComponentAtNode(div);*/

// using jsconfig.json we are updating aur imports from :- import App from "./components/App"
// to import App from "components/App" now onwoars we won't use "./" or "../" instead we refere to "components"
