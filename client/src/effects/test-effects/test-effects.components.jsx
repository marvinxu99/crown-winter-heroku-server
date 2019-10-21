import React from 'react';

import User from '../user/user.component';
import Post from '../post/post.component';

import './test-effects.styles.scss';

const TestEffects = props => {
  return (
    <div className='test-effects'>
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
};

export default TestEffects;
