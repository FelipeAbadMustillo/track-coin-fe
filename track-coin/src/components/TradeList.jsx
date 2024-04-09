import { View, StyleSheet, FlatList } from "react-native"
import TradeListHeader from "./TradeListHeader.jsx"
import TradeItem from "./TradeItem.jsx"
import theme from "../theme.js"
import trades from '../data/trades.js'

const TradeList = () => {
    return (
      <View style={styles.container}>
        <TradeListHeader />
        <FlatList
          data={trades}
          renderItem={({ item: trade }) => (
            <TradeItem {...trade}/>
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: theme.colours.background.secondary,
      padding: 10,
      paddingTop: 5,
      width: 350,
      height: 600,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: theme.colours.border.primary
  }
})

export default TradeList