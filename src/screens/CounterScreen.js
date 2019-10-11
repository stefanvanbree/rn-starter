import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    //Introduce state
    const [counter, setCounter] = useState(0);

    return (
    <View>
        <Button title="Increase" onPress={() =>
            { setCounter(counter + 1);
             console.log(counter)}
        }/>
        <Button title="Decrease" onPress={() =>
            { setCounter(counter - 1);
            console.log(counter)}
        }/>
        <Text>Current Count: {counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;