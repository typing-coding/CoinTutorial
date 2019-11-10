import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CoinItem from '../components/CoinItem'

const data = [{
    "id": "bitcoin", 
    "name": "Bitcoin", 
    "symbol": "BTC", 
    "rank": "1", 
    "price_usd": "8825.66362497", 
    "price_btc": "1.0", 
    "24h_volume_usd": "17625118548.6", 
    "market_cap_usd": "159211000246", 
    "available_supply": "18039550.0", 
    "total_supply": "18039550.0", 
    "max_supply": "21000000.0", 
    "percent_change_1h": "-0.26", 
    "percent_change_24h": "-0.13", 
    "percent_change_7d": "-4.12", 
    "last_updated": "1573401932"
}, 
{
    "id": "ethereum", 
    "name": "Ethereum", 
    "symbol": "ETH", 
    "rank": "2", 
    "price_usd": "187.336222723", 
    "price_btc": "0.02122906", 
    "24h_volume_usd": "7806218892.95", 
    "market_cap_usd": "20326008968.0", 
    "available_supply": "108500154.0", 
    "total_supply": "108500154.0", 
    "max_supply": null, 
    "percent_change_1h": "0.01", 
    "percent_change_24h": "1.51", 
    "percent_change_7d": "2.85", 
    "last_updated": "1573401919"
}, 
{
    "id": "ripple", 
    "name": "XRP", 
    "symbol": "XRP", 
    "rank": "3", 
    "price_usd": "0.2794888736", 
    "price_btc": "0.00003167", 
    "24h_volume_usd": "1394879305.48", 
    "market_cap_usd": "12087360425.0", 
    "available_supply": "43248091671.0", 
    "total_supply": "99991316762.0", 
    "max_supply": "100000000000", 
    "percent_change_1h": "-0.12", 
    "percent_change_24h": "0.17", 
    "percent_change_7d": "-4.21", 
    "last_updated": "1573401907"
}, 
{
    "id": "bitcoin-cash", 
    "name": "Bitcoin Cash", 
    "symbol": "BCH", 
    "rank": "4", 
    "price_usd": "284.810252081", 
    "price_btc": "0.03227488", 
    "24h_volume_usd": "1738439640.66", 
    "market_cap_usd": "5156664060.0", 
    "available_supply": "18105613.0", 
    "total_supply": "18105613.0", 
    "max_supply": "21000000.0", 
    "percent_change_1h": "-0.14", 
    "percent_change_24h": "1.15", 
    "percent_change_7d": "-1.05", 
    "last_updated": "1573401905"
}, 
{
    "id": "tether", 
    "name": "Tether", 
    "symbol": "USDT", 
    "rank": "5", 
    "price_usd": "1.0024181799", 
    "price_btc": "0.00011359", 
    "24h_volume_usd": "20939973051.3", 
    "market_cap_usd": "4117978446.0", 
    "available_supply": "4108044456.0", 
    "total_supply": "4207771504.0", 
    "max_supply": null, 
    "percent_change_1h": "-0.05", 
    "percent_change_24h": "-0.25", 
    "percent_change_7d": "-0.33", 
    "last_updated": "1573401922"
}, 
{
    "id": "litecoin", 
    "name": "Litecoin", 
    "symbol": "LTC", 
    "rank": "6", 
    "price_usd": "63.0032899083", 
    "price_btc": "0.00713957", 
    "24h_volume_usd": "3061194641.63", 
    "market_cap_usd": "4010149686.0", 
    "available_supply": "63649846.0", 
    "total_supply": "63649846.0", 
    "max_supply": "84000000.0", 
    "percent_change_1h": "0.37", 
    "percent_change_24h": "3.27", 
    "percent_change_7d": "8.52", 
    "last_updated": "1573401906"
}, 
{
    "id": "eos", 
    "name": "EOS", 
    "symbol": "EOS", 
    "rank": "7", 
    "price_usd": "3.5314226681", 
    "price_btc": "0.00040018", 
    "24h_volume_usd": "2050687401.76", 
    "market_cap_usd": "3318078850.0", 
    "available_supply": "939587005.0", 
    "total_supply": "1036287017.0", 
    "max_supply": null, 
    "percent_change_1h": "0.1", 
    "percent_change_24h": "1.82", 
    "percent_change_7d": "7.84", 
    "last_updated": "1573401906"
}, 
{
    "id": "binance-coin", 
    "name": "Binance Coin", 
    "symbol": "BNB", 
    "rank": "8", 
    "price_usd": "20.10536956", 
    "price_btc": "0.00227795", 
    "24h_volume_usd": "217292811.766", 
    "market_cap_usd": "3127123095.0", 
    "available_supply": "155536713.0", 
    "total_supply": "187536713.0", 
    "max_supply": "187536713.0", 
    "percent_change_1h": "-0.26", 
    "percent_change_24h": "1.34", 
    "percent_change_7d": "0.23", 
    "last_updated": "1573401967"
}, 
{
    "id": "bitcoin-sv", 
    "name": "Bitcoin SV", 
    "symbol": "BSV", 
    "rank": "9", 
    "price_usd": "133.181234759", 
    "price_btc": "0.01509218", 
    "24h_volume_usd": "586385520.181", 
    "market_cap_usd": "2406373820.0", 
    "available_supply": "18068415.0", 
    "total_supply": "18068415.0", 
    "max_supply": "21000000.0", 
    "percent_change_1h": "-0.16", 
    "percent_change_24h": "2.98", 
    "percent_change_7d": "2.99", 
    "last_updated": "1573401913"
}, 
{
    "id": "stellar", 
    "name": "Stellar", 
    "symbol": "XLM", 
    "rank": "10", 
    "price_usd": "0.0769744202", 
    "price_btc": "0.00000872", 
    "24h_volume_usd": "277074307.511", 
    "market_cap_usd": "1543705029.0", 
    "available_supply": "20054779554.0", 
    "total_supply": "50000000000.0", 
    "max_supply": null, 
    "percent_change_1h": "0.65", 
    "percent_change_24h": "6.32", 
    "percent_change_7d": "11.97", 
    "last_updated": "1573401964"
}];

export default class CoinView extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {data.map(item=><CoinItem {...item} />)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue'
    }
})
