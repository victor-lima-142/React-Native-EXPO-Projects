import * as React from 'react'
import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function SignWith(message) {
    return (
        <View style={styles.signContainer}>
            <Text style={{ textAlign: 'center' }}>{message}</Text>
            <View style={styles.socials}>
                <Pressable style={styles.card} onPress={() => {
                    funcs.alert('Google', 'Here it integrates with the Google API');
                }}>
                    <Image style={styles.icon} source={require('../assets/google.png')} />
                </Pressable>
                <Pressable style={styles.card} onPress={() => {
                    funcs.alert('Facebook', 'Here it integrates with the Facebook API');
                }}>
                    <Image style={styles.icon} source={require('../assets/facebook.png')} />
                </Pressable>
                <Pressable style={styles.card} onPress={() => {
                    funcs.alert('Github', 'Here it integrates with the github API');
                }}>
                    <Image style={styles.icon} source={require('../assets/github.png')} />
                </Pressable>
            </View>
        </View>
    )
}

const funcs = {
    alert: (title, message) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "That's right" }
            ]
        );
    }
}


const styles = StyleSheet.create({
    signContainer: {
        marginTop: 20,
        textAlign: 'center'
    },
    socials: {
        marginTop: 20,
        minWidth: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    card: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: .16,
        elevation: 1,
        padding: 10
    },
    icon: {
        width: 35,
        height: 35
    }
})