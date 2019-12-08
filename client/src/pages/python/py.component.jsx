import React from 'react';

import './py.styles.scss';

import winter2 from '../../assets/images/winter-winter.jpeg';


const PyPage = () => (
  <div class='py-page-container'>
    <h2>Python3</h2>
    <ul>
      <li><a href="https://docs.python.org/3/" target='_blank' rel='noopener noreferrer'>Python3</a></li>
      <li><a href="https://www.makeuseof.com/tag/python-instance-static-class-methods/"
        target='_blank' rel='noopener noreferrer'>Python methods</a></li>
      <li>...more on the way</li>
    </ul>

    <img className='winter-small' src={winter2} alt='winter the dog' />
  </div>
);

export default PyPage;
