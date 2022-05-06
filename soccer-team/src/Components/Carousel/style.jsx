import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    normalDot: {
        height: 6,
        width: 6,
        borderRadius: 4,
        shadowColor: "#000",
        elevation: 20,
        marginHorizontal: 4
    },
    indicatorContainer: {
        paddingVertical: 5,
        paddingBottom: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});


export default styles;