import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "white",
        shadowColor: "#000",
        elevation: 2,
        marginHorizontal: 4
    },
    indicatorContainer: {
        paddingTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});


export default styles;