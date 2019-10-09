import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = (props) => {
    //console.log(props);
    return (
        <View>
            <Image source={props.myImageSource}/>
            <Text>{props.myTitle}</Text>
            <Text>Score: {props.myScore}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;