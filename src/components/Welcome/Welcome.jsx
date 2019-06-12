import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Welcome.styl';

class Welcome extends Component {
    componentDidMount() {
        const {history}=this.props;
        if (sessionStorage.getItem('userInfo')) history.replace('/index');
        else history.replace('/login');
    }

    render() {
        return (
            <div className="welcome">
                <div className="spinner" />
            </div>
        );
    }
}

export default connect()(Welcome);
