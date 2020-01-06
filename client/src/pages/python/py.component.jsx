import React from 'react';

import './py.styles.scss';

import winter2 from '../../assets/images/winter-winter.jpeg';
import ww_logo from '../../assets/images/ww_logo_ww.png';


const PyPage = () => (
  <div class='py-page-container'>
    <h2>Python3</h2>
    <ul>
      <li style={{ padding: "5px" }}><a href="https://docs.python.org/3/" target='_blank' rel='noopener noreferrer'>Python3 Documentation</a></li>
      <li style={{ padding: "5px" }}><a href="https://www.makeuseof.com/tag/python-instance-static-class-methods/"
        target='_blank' rel='noopener noreferrer'>Python methods: Instance vs. Static vs. Class</a></li>
      <li style={{ padding: "5px" }}><a href="https://hatchful.shopify.com/" target='_blank' rel='noopener noreferrer'>Hatchful - create a logo</a></li>
      <li style={{ padding: "5px" }}><a href="https://winnpysoft.pythonanywhere.com/" target='_blank' rel='noopener noreferrer'>
        <img src={ww_logo} style={{ width: "64px", height: "64px", paddingRight: "10px" }} alt='Winter WinnPy'></img>Winter's Website</a>
      </li>
      <li style={{ padding: "5px" }}>...more on the way</li>
    </ul>

    <h2>Machine Learning</h2>
	Steps:
	<ol>
		<li>import the data</li>
		<li>Clean the data</li>
		<li>Split data. Training Set/Test set</li>
		<li>Create a Model</li>
		<li>Check the output</li>
	</ol>	

    <ul>
	  <li style={{ padding: "5px" }}><a href='https://medium.com/machine-learning-for-humans/why-machine-learning-matters-6164faf1df12' target='_blank' rel='noopener noreferrer'>Machine Learning for Humans</a>
	  </li>
	  <li style={{ padding: "5px" }}><a href='https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/preview?imm_mid=0f9b7e&cmp=em-data-na-na-newsltr_20171213&slide=id.g183f28bdc3_0_90' target='_blank' rel='noopener noreferrer'>ML slide deck</a>
	  </li>
	  <li style={{ padding: "5px" }}><a href='https://vas3k.com/blog/machine_learning/' target='_blank' rel='noopener noreferrer'>ML for everyone</a>
	  </li>
      <li style={{ padding: "5px" }}><a href="https://machinelearningmastery.com/how-machine-learning-algorithms-work/" target='_blank' 
		rel='noopener noreferrer'>How Machine Learning Algorithms Work</a>
	  </li>
      <li style={{ padding: "5px" }}><a href="https://machinelearningmastery.com/classification-versus-regression-in-machine-learning/"
        target='_blank' rel='noopener noreferrer'>Difference Between Classification and Regression</a>
	  </li>
      <li style={{ padding: "5px" }}><a href="https://www.analyticsvidhya.com/blog/2018/08/k-nearest-neighbor-introduction-regression-python/"
        target='_blank' rel='noopener noreferrer'>A Practical Introduction to K-Nearest Neighbors Algorithm for Regression (with Python code)</a>
	  </li>
	  <li style={{ padding: "5px" }}><a href='https://scikit-learn.org/stable/tutorial/basic/tutorial.html' target='_blank' rel='noopener noreferrer'>An introduction to machine learning with scikit-learn</a>
	  </li>
	  <li style={{ padding: "5px" }}><a href='https://www.kaggle.com/' target='_blank' rel='noopener noreferrer'>Kaggle Datasets</a></li>
	  <li style={{ padding: "5px" }}><a href='https://www.anaconda.com/' target='_blank' rel='noopener noreferrer'>Anaconda</a></li>
	  
      <li style={{ padding: "5px" }}>...more on the way</li>
	  
    </ul>

    <img className='winter-small' src={winter2} alt='winter the dog' />
  </div >
);

export default PyPage;
