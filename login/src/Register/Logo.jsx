import * as React from 'react'
import { Image } from 'react-native'

export default function Logo() {
    return (<>
        <Image style={{height: 90, width: 104, marginBottom: 35}} source={require("../../assets/LogoSymbol.png")} />
    </>)
}