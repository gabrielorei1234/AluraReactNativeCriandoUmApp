import React from 'react';
import { Image, Text, StyleSheet, View, ScrollView } from 'react-native';
import Texto from '../../componentes/texto';
import logo from '../../../assets/logo.png';
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/itens';

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});