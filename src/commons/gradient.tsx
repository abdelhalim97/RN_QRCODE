import { View, StyleSheet, ViewProps } from 'react-native'
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg'

type GradientProps = { fromColor: string, toColor: string, children?: any, height?: number | string, opacityColor1?: number, opacityColor2?: number } & ViewProps

const Gradient = ({ children, fromColor, toColor, height = '100%', opacityColor1 = 1, opacityColor2 = 1, ...otherViewProps }: GradientProps) => {
    const gradientUniqueId = `grad${fromColor}+${toColor}`.replace(/[^a-zA-Z0-9 ]/g, '')
    return <>
        <View style={[{ ...StyleSheet.absoluteFillObject, height, zIndex: -1, top: 0, left: 0 }, otherViewProps.style]} {...otherViewProps}>
            <Svg height='100%' width="100%" style={StyleSheet.absoluteFillObject}>
                <Defs>
                    <LinearGradient id={gradientUniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <Stop offset="0" stopColor={fromColor} stopOpacity={opacityColor1} />
                        <Stop offset="0.5" stopColor={toColor} stopOpacity={opacityColor2} />
                        <Stop offset="1" stopColor={fromColor} stopOpacity={opacityColor2} />
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill={`url(#${gradientUniqueId})`} />
            </Svg>
        </View>
        {children}
    </>
};

export default Gradient