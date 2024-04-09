import { View, StyleSheet, Text, Image } from 'react-native'
import theme from '../theme.js'
import StyledText from './StyledText.jsx'

const TradeCurrency = ({ coinIcon, coinAbreviation, amount }) => (
    <View style={styles.container}>
        <View style={styles.coinInfo}>
            <Image style={styles.image} source={{ uri: coinIcon }} />
            <StyledText>{coinAbreviation}</StyledText>
        </View>
        <View style={styles.coinAmount}>
            <StyledText>{amount}</StyledText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '50%'
    },
    coinInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '35%'
    },
    coinAmount: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%'
    },
    image: {
        width: theme.images.icon.width,
        height: theme.images.icon.height
    }
})

export default TradeCurrency