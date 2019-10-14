import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const HomeScreen = ({ navigation }) => {
    //console.log(navigation);
  return (<View>
        <Text style={styles.text}>My Home Screen</Text>
        <Button
            onPress={()=>navigation.navigate('Components')}
            title="Go to Components Demo"
        />
        <Separator/>
        <Button
            onPress={()=>navigation.navigate('List')}
            title="Go to List Demo"
        />
        <Separator/>
        <Button
            onPress={()=>navigation.navigate('Image')}
            title="Go to Images Demo"
            style ={styles.separator}
        />
        <Separator/>
        <Button
            onPress={()=>navigation.navigate('Counter')}
            title="Go to Counter Demo"
        />
        <Separator/>
         <Button
            onPress={()=>navigation.navigate('Color')}
            title="Go to Color Demo"

        />
        <Separator/>
        <Button
            onPress={()=>navigation.navigate('Square')}
            title="Go to Square Demo"

        />
        <Separator/>
        <Button
            onPress={()=>navigation.navigate('Text')}
            title="Go to Text Demo"

        />
        <Separator/>
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
   separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default HomeScreen;
