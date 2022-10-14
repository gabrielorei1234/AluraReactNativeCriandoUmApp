import React from 'react';
import { Image, Text, StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Texto from '../../componentes/texto';
import logo from '../../../assets/logo.png';
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes';
import Item from './componentes/item';

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList keyExtractor={({ nome }) => nome}
            data={itens.lista}
            renderItem={Item}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }} />


    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }, titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});