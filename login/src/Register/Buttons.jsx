import * as React from "react";
import { Text, Pressable, Alert, View, StyleSheet } from "react-native"

export default function Buttons() {
    return (<>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => { Alert.alert('Welcome!', `You have been registered!`) }} >
                <Text style={{ color: "#F46530" }}>{`Register`}</Text>
            </Pressable>
        </View>
    </>)
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 6,
        backgroundColor: '#2A2E30'
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        minWidth: '60%'
    }
})