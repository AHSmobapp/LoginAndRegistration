import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const top = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}></View>
            <Text>Login Screen</Text>
        </View>
    )
}

export default top

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
    },

    top : {
        flex : 0.4,
        // flexDirection : 'column',
        backgroundColor : '#3683de',
        width: 400,
        height: 300,
        resizeMode: 'cover',
        borderBottomLeftRadius :70,
        borderBottomRightRadius : 70,
    }
})
