import { View, StyleSheet } from "react-native";
import theme from "../theme.js";
import TradeCurrency from "./TradeCurrency.jsx";

const TradeItem = (props) => (
    <View key={props.id} style={styles.container}>
        <TradeCurrency {...props.bought} />
        <TradeCurrency {...props.sold} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colours.border.third
    }
})

export default TradeItem