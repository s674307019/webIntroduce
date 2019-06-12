// 开发入口文件

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import {decodeFn} from 'encodePwd/encodeAndDecode'; // 加密、解密

import MainComponent from './MainComponent';

window.API='/api';
// window.TOKEN=sessionStorage.getItem('token') ? decodeFn(sessionStorage.getItem('token')).replace('token', '') : '';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(MainComponent);

if (module.hot){
    module.hot.accept('./MainComponent', () => {
        render(MainComponent);
    })
}
