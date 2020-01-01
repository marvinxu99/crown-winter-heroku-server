import React from 'react';

import './py.styles.scss';

import winter2 from '../../assets/images/winter-winter.jpeg';
import ww_logo from '../../assets/images/ww_logo_ww.png';


const PyPage = () => (
  <div class='py-page-container'>
    <h2>Python3</h2>
    <ul>
      <li style={{ padding: "5px" }}><a href="https://docs.python.org/3/" target='_blank' rel='noopener noreferrer'>Python3</a></li>
      <li style={{ padding: "5px" }}><a href="https://www.makeuseof.com/tag/python-instance-static-class-methods/"
        target='_blank' rel='noopener noreferrer'>Python methods</a></li>
      <li style={{ padding: "5px" }}><a href="https://hatchful.shopify.com/" target='_blank' rel='noopener noreferrer'>Hatchful - create a logo</a></li>
      <li style={{ padding: "5px" }}><a href="https://winnpysoft.pythonanywhere.com/" target='_blank' rel='noopener noreferrer'>
        <img src={ww_logo} style={{ width: "64px", height: "64px", paddingRight: "10px" }} alt='Winter WinnPy'></img>Winter's Website</a>
      </li>
      <li style={{ padding: "5px" }}>...more on the way</li>
    </ul>

    <img className='winter-small' src={winter2} alt='winter the dog' />
  </div >
);

export default PyPage;
