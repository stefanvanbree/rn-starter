import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    //console.log(navigation);
  return (<View>
        <Text style={styles.text}>My Home Screen</Text>
        <Button
            onPress={()=>navigation.navigate('Components')}
            title="Go to Components Demo"
        />
        <TouchableOpacity onPress={()=>navigation.navigate('List')}>
          <Text>Go To List Screen</Text>
        </TouchableOpacity>
        <Button
            onPress={()=>navigation.navigate('Image')}
            title="Go to Images Screen"
        />
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
