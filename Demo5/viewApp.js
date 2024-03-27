// B4


import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tang, Giam } from './actions'

const GD = () => {
    const count = useSelector(state => state.dem);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Dem: {count}</Text>
            <Button title='Tang'
                onPress={() => dispatch(Tang())}

            />

            <Button title='Giam'
                onPress={() => dispatch(Giam())}

            />
        </View>
    )
}

export default GD

const styles = StyleSheet.create({})