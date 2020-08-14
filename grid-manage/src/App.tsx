import React from 'react';
import {Button} from 'antd';
import './App.scss';
import CommonHeader from './pages/common-header/CommonHeader';
import CommonGridContent from './pages/common-grid-content/CommonGridContent';

function App() {
  return (
    <div className='container'>
    <CommonHeader />
    <CommonGridContent />
    </div>
  );
}

export default App;
