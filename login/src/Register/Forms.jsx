import * as React from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native"
import { Entypo } from "@expo/vector-icons";


export default function Forms() {
    const [hidePassword, setHidePassword] = React.useState(true);

    return (
        <View>
            <View style={styles.formGroup}>
                <TextInput style={[styles.formInput, { borderRadius: 5 }]} placeholder={`Email`} />
            </View>
            <View style={[styles.formGroup, { marginTop: 15}]}>
                <TextInput style={[styles.formInput, { borderRadius: 5 }]} placeholder={`Username`} />
            </View>
            <View style={styles.formGroup}>
                <View style={styles.passwordGroup}>
                    <TextInput secureTextEntry={hidePassword}
                        style={[styles.formInput, { flex: 1 }, { borderBottomLeftRadius: 5 }, { borderTopLeftRadius: 5 }]}
                        placeholder="Password" />
                    <Entypo onPress={() => { setHidePassword((hidePassword === true) ? false : true) }} style={{ paddingStart: 10 }} name="eye" size={24} color="#F46530" />
                </View>
            </View>
            <View style={styles.formGroup}>
                <View style={styles.passwordGroup}>
                    <TextInput secureTextEntry={hidePassword}
                        style={[styles.formInput, { flex: 1 }, { borderBottomLeftRadius: 5 }, { borderTopLeftRadius: 5 }]}
                        placeholder="Confirm password" />
                    <Entypo onPress={() => { setHidePassword((hidePassword === true) ? false : true) }} style={{ paddingStart: 10 }} name="eye" size={24} color="#F46530" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formInput: {
        color: "#000",
        padding: 5,
        paddingHorizontal: 10,
        minWidth: "75%",
        fontSize: 17,
        shadowColor: "#000",
        elevation: 5,
        backgroundColor: "white"
    },
    formGroup: {
        minWidth: "75%"
    },
    passwordGroup: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})