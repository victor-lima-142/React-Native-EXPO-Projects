import * as React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function Buttons() {
    const navigation = useNavigation();
    return (<>
        <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, styles.btn1]}>
                <Text style={{ color: "#F46530" }}>{`Sign in`}</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.btn2]} onPress={() => {
                navigation.navigate('Register');
            }}>
                <Text style={{ color: "#2A2E30" }}>{`Sign up`}</Text>
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
        backgroundColor: 'white'
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        minWidth: '60%'
    }
})