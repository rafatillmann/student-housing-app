import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

// classe igual ao HomeList, porém em vez da lista de itens vir pelo import data, ela é capturada no Async
export default function FavoritesScreen({ navigation }) {

    // aqui é uma varíavel de estado, significa que sempre que ela for atualizado no setState, quem usa ela será recarregado também
    const [data, setData] = useState([])

    // useEffect é uma função React que ela executa apenas uma única vez quando o FavoritesScreen é carregado
    // no caso o que ele faz é pegar a lista de favoritos, se tivesse fora, isso ia ficar executando o tempo todo 
    useEffect(async () => {
        await AsyncStorage.getAllKeys()
        .then(list => handleFavorites(list)) // ele chama essa função externa 
    }, [])

    const handleFavorites = (list) => {

        for (let item of list){ // para cada id da lista
            AsyncStorage.getItem(item) // ele captura o json completo
            .then(value => setData(data => [...data, JSON.parse(value)])) // e atualizada o data, que é a lista de favoritos 
        }
    }


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.imgbox}>
                <Image style={{ height: 150, aspectRatio: 1.5, borderRadius: 10 }} source={{ uri: item.foto }}></Image>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.nome}</Text>
                <View style={styles.endereco}>
                    <Image style={styles.mapicon} source={require('../../assets/map_icon.png')} />
                    <Text>{item.endereco}</Text>
                </View>
                <View style={styles.preco}>
                    <Image style={styles.moneyicon} source={require('../../assets/money.png')} />
                    <Text style={styles.contentvalor}>{item.valor}</Text>
                </View>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('HomeDetails', { item: item })}>
                <Text style={styles.text}>Ver detalhes</Text>
            </Pressable>
        </View>

    );

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
            <Button title="Voltar" onPress={() => navigation.navigate('Home')} color='#182952' />
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 15,
        marginHorizontal: 35,
        borderRadius: 16,
        backgroundColor: "#D6D6D6",
        padding: 20
    },
    imgbox: {
        alignItems: 'center',
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#182952'
    },
    content: {
        marginBottom: 15
    },
    button: {
        backgroundColor: '#7045AF',
        padding: 10,
        borderRadius: 10,
        width: 110,
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    endereco: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 5
    },
    preco: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 5
    },
    mapicon: {
        marginRight: 5
    },
    moneyicon: {
        marginRight: 6,
        marginLeft: 3
    },
    contentvalor: {
        fontWeight: 'bold',
        color: '#182952'
    }
})