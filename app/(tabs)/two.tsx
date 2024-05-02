import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from '@/components/Themed';
import {useClick} from "@/contexts/click.context";
import {useCart, CartContextType} from "@/contexts/articleContext";
import { Image } from 'react-native';
import Colors from "@/constants/Colors";
import React from "react";


export default function TabTwoScreen() {
    const {clickCount} = useClick();
    const { cartItems, removeFromCart , calculTotal} = useCart();
    const handleRemoveProduct = (productId: number) => {
        if (removeFromCart) {
            removeFromCart(productId);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text>Click count: {clickCount}</Text>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text>{item.title}</Text>
                        <Text>{item.price}</Text>
                        <TouchableOpacity  style={styles.button} onPress={() => handleRemoveProduct(item.id)}>
                            <Text style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>-</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
            <Text> Total : {calculTotal()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width : 30,
    },
});
