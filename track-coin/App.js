import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TradeItem from './src/components/tradeItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Track Coin</Text>
      <StatusBar style="auto" />

      <TradeItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
