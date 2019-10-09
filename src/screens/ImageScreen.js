import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail  from '../components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail myTitle="forest"
                     myImageSource={require('../../assets/forest.jpg')}
                     myScore={9}

        />
        <ImageDetail myTitle="beach"
                     myImageSource={require('../../assets/beach.jpg')}
                     myScore={7}

        />
        <ImageDetail myTitle="mountain"
                     myImageSource={require('../../assets/mountain.jpg')}
                     myScore={1}

        />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;