import React, { useState } from 'react';
import './CommonGridBar.scss';
import { Menu, Dropdown, Button } from 'antd';
import { BusinessType } from '../constants/business-type.constant';
import { DownOutlined } from '@ant-design/icons';

function CommonGridBar() {

  const [selectedBusinessType, setSelectedBusinessType] = useState('Monday')
  const changeBusinessType = (e: any) => {
    setSelectedBusinessType(e);
  }
  const menu = (<Menu>
    {
      BusinessType.map((ele, index) => {
        return <Menu.Item key={index} onClick={changeBusinessType.bind(null, ele)}> {ele}</Menu.Item>
      })
    }</Menu>);

  return (
    <div className='common-grid-bar'>
      <div className='business-type'>Hello </div>
      <div>
        <Dropdown className="k-dropdown-color k-dropdown-border" overlay={menu} placement="bottomLeft" trigger={['click']}>
          <Button>For
            <DownOutlined className="k-icon-arrow-down" />
          </Button>
        </Dropdown>
        <Button className="k-dropdown-color k-dropdown-show">
          <span>{selectedBusinessType}</span>
        </Button>
      </div>
      <div></div>
    </div>
  )
}

export default CommonGridBar;