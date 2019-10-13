import React, { useReducer} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT=15;

const myReducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount};
        case 'green':
            return { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
        default:
            return state;
    }

}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(myReducer, { red: 0, green: 0, blue: 0 })

    return (
        <View>
            <ColorCounter color="Red" onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Green" onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Blue" onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}/>
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
            <Text>RGB Values: R: {state.red}, G: {state.green}, B: {state.blue}</Text>
        </View>

    );
};

const styles = StyleSheet.create({});

export default SquareScreen;