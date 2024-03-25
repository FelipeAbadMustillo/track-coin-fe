import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../theme.js"
import TradeCurrency from "./TradeCurrency.jsx";

const TradeItem = (props) => (
    <View key={props.id} style={styles.container}>
        <TradeCurrency {...props.bought} />
        <Image style={styles.image} source={{ uri: 'https://svgsilh.com/svg/27323.svg' }} />
        <TradeCurrency {...props.sold} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: theme.images.icon.width,
        height: theme.images.icon.height
    }
})

export default TradeItem