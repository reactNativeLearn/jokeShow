/**
 * Created by ljunb on 16/5/30.
 */
import React, { Component } from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class LoadMoreFooter extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <ActivityIndicator />
                <Text style={styles.footerTitle}>正在加载更多……</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },

    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    }
})