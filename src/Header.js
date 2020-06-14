import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <img src='https://www.yamada-egg.com/blog/wp-content/uploads/2016/07/%E9%B6%8F.jpg' />
        </div>
        <p>Takahigu Channel</p>
      </div>
    );
  }
}

export default Header;
