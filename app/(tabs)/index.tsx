import {StyleSheet} from 'react-native';
import {View} from '@/components/Themed';
import {Card} from "@/components/Card";
import {useProducts} from "@/hooks/useProducts";

export default function TabOneScreen() {
    const {products} = useProducts();

    return (
        <View style={styles.container}>
            {
                products?.length ? <Card photo_link={products[0].image}
                                         type={products[0].category}
                                         price={products[0].price}
                                         name={products[0].title}/> : undefined
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
