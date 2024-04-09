import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import theme from './src/theme.js'
import TradeList from './src/components/TradeList.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.list}>
        <TradeList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colours.background.primary,
    alignItems: 'center'
  },
  list: {
    marginTop: Constants.statusBarHeight + 40
  }
})