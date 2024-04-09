import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

 const StyledText = ({children, color, fontSize, fontWeight, align, title, style, ...restOfProps}) => {
    const textStyles = [
        styles.text,
        (color === 'secondary' || title) && styles.colorSecondary,
        fontSize === 'subheading' && styles.subHeading,
        (fontWeight === 'bold' || title) && styles.bold,
        style
    ]

    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: theme.fonts.colours.primary,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fonts.weights.normal,
        textAlign: 'center',
        padding: 2
    },
    colorSecondary: {
        color: theme.fonts.colours.secondary
    },
    subHeading: {
        fontSize: theme.fonts.sizes.subHeading
    },
    bold: {
        fontWeight: theme.fonts.weights.bold
    }
})

export default StyledText