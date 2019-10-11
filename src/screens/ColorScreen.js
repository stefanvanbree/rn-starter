import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    //Introduce state
    const [colors, setColors] = useState([]);

    return (
    <View>
        <Button title="Add a Color" onPress={() => {
            setColors([...colors, randomRgb()])
        }}/>
        <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem ={ ({item}) => {
                //item = rgb(x,y,z)
                return <View style={{ height:100, width:100, backgroundColor: item }} />
            }}
        />
    </View>
    );
};

const randomRgb = () => {
    //a value between 0 and 255
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green},${blue})`
};

const styles = StyleSheet.create({});

export default ColorScreen;