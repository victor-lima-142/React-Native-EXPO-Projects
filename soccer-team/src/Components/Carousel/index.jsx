import { ScrollView, StyleSheet, View, Image, Animated, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import styles from './style'
import { render } from 'react-dom'

export default function CarouselTemplate(items, indicators) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    return (
        <View style={styles.scrollContainer}>
            <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })} scrollEventThrottle={1}>
                {items.map((element, elementIndex) => {
                    return (
                        <View style={{ backgroundColor: '#f0f0f0', width: windowWidth, height: 255, justifyContent:'center',alignContent: 'center',alignItems: 'center' }} key={elementIndex}>
                            {element.element}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

// {(!indicators) ? null :
//     <View style={styles.indicatorContainer}>
//         {elements.map((element, elementIndex) => {
//             const width = scrollX.interpolate({
//                 inputRange: [
//                     windowWidth * (elementIndex - 1),
//                     windowWidth * elementIndex,
//                     windowWidth * (elementIndex + 1)
//                 ],
//                 outputRange: [8, 16, 8],
//                 extrapolate: "clamp"
//             });
//             return (
//                 <Animated.View
//                     key={elementIndex}
//                     style={[styles.normalDot, { width }]}
//                 />
//             );
//         })}
//     </View>
// }