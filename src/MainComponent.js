import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import App from 'App'; // 路由组件-所有路由写在这里


/* 把页面组件包在一个根组件里，以便配置热启动 */

export default class MainComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        )
    }
}

