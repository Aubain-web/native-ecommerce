import {Text, View} from "@/components/Themed";
import {Image, Pressable, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import {useCart} from "@/contexts/articleContext";
import {Product} from "@/models/product";

type Props = {
    photo_link: string;
    name: string;
    type: string;
    price: number;
    onPress: VoidFunction;
}

export const Card = ({photo_link, name, type, price, onPress}: Props): React.JSX.Element => {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            marginBottom: 20,
            paddingTop: 15,
        },
        addButton: {
            backgroundColor: Colors.light.tint,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30
        },
        title: {
            fontWeight: 'bold',
            fontSize: 16
        },
        image: {
            width: '100%',
            aspectRatio: 1,
            objectFit: 'contain',
            borderRadius: 10
        },
        subtitle: {
            fontSize: 14,
            color: 'grey',
            marginTop: 5,
        },
        price: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'grey'
        },
        body: {
            paddingHorizontal: 10,
            paddingTop: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            flex: 1
        }
    });

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{uri: photo_link}}/>
            <View style={styles.body}>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{type}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10
                }}>
                    <Text style={styles.price}>${price.toLocaleString()}</Text>
                    <TouchableOpacity style={styles.addButton} >
                        <Text style={{color: 'white', fontSize: 20}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    );
}
