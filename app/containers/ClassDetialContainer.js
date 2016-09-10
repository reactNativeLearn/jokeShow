/**
 * Created by jason on 16/7/14.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import ClassDetial from '../pages/ClassDetial';

class ClassDetialContainer extends Component {
    render() {
        return (
            <ClassDetial {...this.props} />
        )
    }
}

export default connect((state) => {
    const { ClassDetial } = state;
    return {
        ClassDetial
    }
})(ClassDetialContainer);