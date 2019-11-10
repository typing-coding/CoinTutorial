import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

// https://api.coinmarketcap.com/v1/ticker/


export default class CoinItem extends Component {
    render() {
        return (
            <View style={styles.container} key={this.props.id}>
                <Image
                 style={styles.image}
                 source={{uri: "https://bitcoin.org/img/icons/opengraph.png"}} />
                 <View style={styles.textContent}>
                     <Text style={styles.title}>{this.props.name || 'Name'}</Text>
                     <Text style={styles.subText}>volume : { this.props["24h_volume_usd"] || 0} </Text>
                     <Text style={styles.assistText}>price : {this.props.price_usd || 0}</Text>
                 </View>
                 <Text style={styles.rightText}>{ this.props.rank || 0}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#f2f2f2'
    },
    image: {
        width:50,
        height: 50,
        marginRight: 20
    },
    textContent: {
        flex: 1
    },
    rank: {
        paddingRight: 20
    },
    title: {
        fontSize: 20,
        color: '#323232'
    },
    subText: {
        fontSize: 16,
        color: '#666'
    },
    assistText: {
        fontSize: 12,
        color: '#999'
    },
    rightText: {
        fontSize: 20
    }
})
