import React, { Component } from 'react';

import PropTypes from 'prop-types';
export class Member { }

export default class MyProp extends Component {
    render() {
        console.log(this.props);
        return <p>結果はコンソールを確認してください</p>;
    }

}

MyProp.propType = {
    prop1: PropTypes.instanceOf(Member)
};
