import React, { useReducer} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT=15;

const myReducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    // action === { type: 'change_red', 'change_green', 'change_blue', payload: 15)
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload};
        default:
            return state;
    }

}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(myReducer, { red: 0, green: 0, blue: 0 })

    return (
        <View>
            <ColorCounter color="Red" onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Green" onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Blue" onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                          onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}/>
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
            <Text>RGB Values: R: {state.red}, G: {state.green}, B: {state.blue}</Text>
        </View>

    );
};

const styles = StyleSheet.create({});

export default SquareScreen;