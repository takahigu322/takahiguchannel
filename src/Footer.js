import React from 'react';
import logo from './IMG_2265.png';


class Footer extends React.Component {

  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src={logo} />
            <p>下まで見てくれてありがとう</p>
          </div>
          <ul className='footer-list'>
            <li>1</li>
            <li>2の</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
