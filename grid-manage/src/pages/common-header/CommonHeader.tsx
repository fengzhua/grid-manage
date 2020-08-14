import React from 'react';
import './CommonHeader.scss';
import {MenuUnfoldOutlined} from '@ant-design/icons';

class CommonHeader extends React.Component {

  render() {
    return (
      <div className='header-container'>
        <MenuUnfoldOutlined className='icon-logo' />
        <div className='word-logo'>Grid Management</div>
      </div>
    )
  }
}
export default CommonHeader;