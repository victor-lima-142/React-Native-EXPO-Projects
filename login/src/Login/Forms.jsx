import * as React from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native"
import { Entypo } from "@expo/vector-icons";


export default function Forms() {
    const [hidePassword, setHidePassword] = React.useState(true);

    return (
        <View>
            <View style={styles.formGroup}>
                <TextInput style={[styles.formInput, { borderRadius: 5 }]} placeholder={`username or email`} />
            </View>
            <View style={styles.formGroup}>
                <View style={styles.passwordGroup}>
                    <TextInput secureTextEntry={hidePassword}
                        style={[styles.formInput, { flex: 1 }, { borderBottomLeftRadius: 5 }, { borderTopLeftRadius: 5 }]}
                        placeholder="password" />
                    <Entypo onPress={() => { setHidePassword((hidePassword === true) ? false : true) }} style={{ paddingStart: 10 }} name="eye" size={24} color="#F46530" />
                </View>
                <Text style={{ color: "#F46530", fontSize: 14, marginTop: 5, textAlign: "center" }}>{`Forgot your password?`}</Text>
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
        marginVertical: 5,
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