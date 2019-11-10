import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.button}>Left</Text>
                <View style={styles.titleBox}>
                <Text style={styles.title}>{this.props.title || 'TITLE'}</Text>
                <Text style={styles.date}>{this.props.refreshDate || '-'}</Text>
                </View>
                <Text style={styles.button}>Right</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 52,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#dfdfdf'
    },
    button: {
        padding: 10,
        backgroundColor: 'skyblue'
    },
    titleBox: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: '#323232'
    },
    date: {
        fontSize: 16,
        color: '#999'
    }
})
