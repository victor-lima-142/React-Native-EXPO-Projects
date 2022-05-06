import { ScrollView, View, Animated, useWindowDimensions, SafeAreaView } from "react-native";
import React, { Component, useRef } from "react";
import styles from './style';

class Carousel extends Component {
    constructor(items, indicatorCondition) {
        super();
        this.items = items;
        this.indicatorCondition = indicatorCondition;
        this.scrollX = useRef(new Animated.Value(0)).current;
        const { width: windowWidth } = useWindowDimensions();
        this.windowWidth = windowWidth;
    }

    renderCarousel(height, dotsColor = '#FFF') {
        return (
            <SafeAreaView style={{ height: (!this.indicatorCondition) ? height + 5 : height + 20}}>
                <ScrollView horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }], { useNativeDriver: false })} scrollEventThrottle={1}>
                    {this.items.map((element, elementIndex) => {
                        return (
                            <View style={{ backgroundColor: '#f0f0f0', width: this.windowWidth, height: height, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} key={elementIndex}>
                                {element.element}
                            </View>
                        );
                    })}
                </ScrollView>
                { (!this.indicatorCondition) ? null : this.indicators(dotsColor) }
            </SafeAreaView>
        )
    }

    indicators(dotsColor) {
        return (<View style={styles.indicatorContainer}>
            {this.items.map((element, elementIndex) => {
                const width = this.scrollX.interpolate({
                    inputRange: [
                        this.windowWidth * (elementIndex - 1),
                        this.windowWidth * elementIndex,
                        this.windowWidth * (elementIndex + 1)
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp"
                });
                return (
                    <Animated.View
                        key={elementIndex}
                        style={[styles.normalDot, { width }, { backgroundColor: dotsColor}]}
                    />
                );
            })}
        </View>)
    }
}

export default Carousel;