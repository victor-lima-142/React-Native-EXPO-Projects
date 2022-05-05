import Forms from "./Forms";
import Logo from "./Logo";
import Buttons from "./Buttons";
import SignWith from "../SignWith";
import { SafeAreaView, StyleSheet } from "react-native"

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Forms />
            <Buttons />
            {SignWith('Or sign in with')}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    }
});