import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Vibration,
} from 'react-native'

export default class VibrationView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.vibration.bind(this)}>点击震动</Text>
            </View>
        )
    }
    vibration() {
        Vibration.vibrate()
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    item: {
        margin: 15,
        height: 30,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 6,
        textAlign: 'center'
    }
})
