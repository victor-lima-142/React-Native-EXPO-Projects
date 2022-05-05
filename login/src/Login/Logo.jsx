import * as React from 'react'
import { Image } from 'react-native'

export default function Logo() {
    return (<>
        <Image style={{height: 120, width: 138, marginBottom: 35}} source={require("../../assets/LogoSymbol.png")} />
    </>)
}