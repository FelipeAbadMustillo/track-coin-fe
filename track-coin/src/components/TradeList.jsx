import { FlatList } from "react-native"
import trades from '../data/trades.js'
import TradeItem from "./TradeItem.jsx"

const TradeList = () => {
    return (
        <FlatList
          data={trades}
          ItemSeparatorComponent={() => <Text>-------------------</Text>}
          renderItem={({ item: trade }) => (
            <TradeItem {...trade}/>
          )}
        />
    )
}

export default TradeList