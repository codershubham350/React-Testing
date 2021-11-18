import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';
import '../setupTest';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments!
  /*below test will fail as with JSDOM and axios we are making a browser request which is not possible,
  so we will fake the request/make request handle by moxios which will deny axios to make request but instead handle it 
  by it's own*/
  // introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    // here Jest will wait for the moxios.wait() to finish first once, it get executed it will call done()
    // which means all the code in this file have been compiled and we're now good to go
    done();
    wrapped.unmount();
  });
});
