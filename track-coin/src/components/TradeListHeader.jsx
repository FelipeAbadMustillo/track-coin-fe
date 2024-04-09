import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";

const TradeListHeader = () => {
    return(
        <View style={styles.header}>
            <StyledText fontSize='subHeading' align='center'>Coin</StyledText>
            <StyledText fontSize='subHeading' align='center'>Amount Sold</StyledText>
            <StyledText fontSize='subHeading' align='center'>Coin</StyledText>
            <StyledText fontSize='subHeading' align='center'>Amount Bought</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 2,
        borderColor: theme.colours.border.primary
    }
})

export default TradeListHeader