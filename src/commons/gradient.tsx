import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientProps } from '../utils/main.utils'

const Gradient = ({ children, fromColor, toColor, ...otherProps }: GradientProps) => {
    return (
        <LinearGradient
            colors={[fromColor, toColor]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={{ flex: 1, width: "100%" }}>
                {children}
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
})
export default Gradient