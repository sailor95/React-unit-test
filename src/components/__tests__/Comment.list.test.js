import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  );
});

it('create one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});