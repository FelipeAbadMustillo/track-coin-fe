import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import TradeList from './src/components/TradeList.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text>Track Coin</Text>
        <TradeList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})