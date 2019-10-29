import React from 'react';

import User from '../user/user.component';
import Post from '../post/post.component';

import './test-effects.styles.scss';

const TestEffects = props => {
  const { userId, postId } = props;
  return (
    <div className='test-effects'>
      <User userId={ userId } />
      <Post postId={ postId } />
    </div>
  );
};

export default TestEffects;
