import React, { Component } from 'react';

export default class MyHelloContent extends Component {
    render() {
        return <div>こんんちは{this.props.children}さん！</div>;
    }
}

