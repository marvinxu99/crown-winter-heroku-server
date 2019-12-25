import React from 'react';

import './crypto.styles.scss';

import winter2 from '../../assets/images/winter-winter.jpeg';


const CryptoPage = () => (
  <div class='crypto-page-container'>
    <h2>Cryptography</h2>
    <ul>
      <li><a href="https://passwordsgenerator.net/sha1-hash-generator/" target='_blank' rel='noopener noreferrer'>SHA1</a></li>
      <li><a href="https://www.miraclesalad.com/webtools/md5.php" target='_blank' rel='noopener noreferrer'>MD5</a></li>
      <li>...more on the way</li>
    </ul>

    <img className='winter-small' src={winter2} alt='winter the dog' />
  </div>
);

export default CryptoPage;
