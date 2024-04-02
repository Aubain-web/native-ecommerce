import {Button, FlatList, StyleSheet} from 'react-native';
import {View} from '@/components/Themed';
import {Card} from "@/components/Card";
import {useProducts} from "@/hooks/useProducts";
import {router} from "expo-router";
import {useClick} from "@/contexts/click.context";

export default function TabOneScreen() {
    const {products} = useProducts();
    const {setClickCount} = useClick();

    return (
        <View style={styles.container}>
            <Button title="Press me" onPress={() => setClickCount?.(10)} />
             <FlatList data={products}
                      keyExtractor={item => item.id.toString()}
                      numColumns={2}
                      columnWrapperStyle={{justifyContent: 'space-between', gap: 30}}
                      style={{paddingHorizontal: 20, paddingTop: 10}}
                      renderItem={({item: product}) => (
                          <Card photo_link={product.image}
                                type={product.category}
                                price={product.price}
                                name={product.title}
                                onPress={() => router.navigate({pathname: 'detail', params: {id: product.id}})}/>
                      )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
});
