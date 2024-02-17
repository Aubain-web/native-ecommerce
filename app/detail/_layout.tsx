import {useLocalSearchParams} from "expo-router";
import React from "react";
import {Text, View} from "@/components/Themed";
import {useProduct} from "@/hooks/useProduct";
import {ActivityIndicator, Image, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "@/constants/Colors";

export default function DetailLayout() {
    const {id} = useLocalSearchParams();
    const {product} = useProduct({productId: id as string});

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            flex: 1,
            padding: 15,
            gap: 10,
        },
        button: {
            backgroundColor: Colors.light.tint,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: '100%'
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
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            {
                product ? (
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: product?.image}}/>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.subtitle}>{product.description}</Text>
                        <Text style={styles.price}>{product.price.toLocaleString()}$</Text>
                        <View style={{flex: 1}}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <ActivityIndicator/>
                )
            }
        </SafeAreaView>
    );
}
