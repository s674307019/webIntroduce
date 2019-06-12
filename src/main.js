// 生产入口文件

import React from 'react';
import ReactDOM from 'react-dom';

// import {decodeFn} from 'encodePwd/encodeAndDecode'; // 加密、解密

import MainComponent from './MainComponent';

window.API='';
// window.TOKEN=sessionStorage.getItem('token') ? decodeFn(sessionStorage.getItem('token')).replace('token', '') : '';

ReactDOM.render(
    <MainComponent />,
    document.getElementById('root')
);
