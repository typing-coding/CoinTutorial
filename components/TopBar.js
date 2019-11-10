import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.button}>Left</Text>
                <Text style={styles.title}>{this.props.title || 'TITLE'}</Text>
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
    title: {
        fontSize: 24,
        color: '#323232'
    }
})
