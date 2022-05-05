import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import React from 'react';
import topo from '../../assets/topo.png';
import fazenda from '../../assets/logo.png';
import Texto from '../componentes/Texto';
const width = Dimensions.get('screen').width;

export default  function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={fazenda} style={estilos.imagemFazenda} />
                <Text style={estilos.nomeFazenda}>Jesus morreu na cruz</Text>
            </View>        
            <Texto style={estilos.descricao}>
                Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
            </Texto>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        lineHeight: 26,
        color: "#FFF",
        fontWeight: "bold",
        padding: 160,
        top: 0
    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },
    fazenda: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
        marginRight: 10
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratRegular",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})