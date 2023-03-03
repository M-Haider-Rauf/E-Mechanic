import {FloatingAction} from 'react-native-floating-action';
import { useSelector } from 'react-redux';
import {MaterialIcons} from 'react-native-vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';

export const CartIcon = (props) => {
    const count = useSelector(state => state.count);
    const color = count === 0 ? 'black' : 'red'; 
    
    return (
        <FAB
        onPress={() => props.navigation.navigate('CartScreen')}
        placement="right"
        color="#4BC500"
        size="small"
        visible
        overlayColor="#454545"
        title={`${count}`}
        icon={{ name: "shopping-cart", color: "#fff" }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
});