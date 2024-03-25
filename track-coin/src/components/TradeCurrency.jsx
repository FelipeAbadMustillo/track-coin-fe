import { View, StyleSheet, Text, Image } from 'react-native'
import theme from '../theme.js'

const TradeCurrency = ({ coinIcon, coinAbreviation, amount }) => (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: coinIcon }} />
        <Text>{coinAbreviation}</Text>
        <Text>{amount}</Text>
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

export default TradeCurrency