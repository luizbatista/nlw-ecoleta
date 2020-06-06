import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
// import { SvgUri } from 'react-native-svg'

import api from '../../services/api'

// interface Item {
//     id: number,
//     title: string,
// }

const Points = () => {

    // const [items, setEitems] = useState([])
    const navigation = useNavigation()

    // useEffect(() => {
    //     api.get('items').then(reponse => {

    //     })
    // }, [])

    function handleNavigateBack() {
        navigation.goBack()
    }

    function handleNavigateToDetails() {
        navigation.navigate('Details')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity  onPress={handleNavigateBack} style={styles.buttomBack}>
                    <Icon name="log-out" size={20} color="#34cb79" />
                </TouchableOpacity>
                <Text style={styles.title}>Bem vindo.</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                <View style={styles.mapContainer}>
                    <MapView style={styles.map} initialRegion={{ latitude: -8.046768, longitude: -34.901154, latitudeDelta: 0.014, longitudeDelta: 0.014 }}>
                        <Marker coordinate={{ latitude: -8.046768, longitude: -34.901154 }} onPress={handleNavigateToDetails}>
                            <View style={styles.mapMarkerContainer}>
                                <Image style={styles.mapMarkerImage} source={{ uri: 'https://www.dsop.com.br/wp-content/uploads/2017/06/educacao-financeira-supermercado-como-economizar-compras.jpg' }}/>
                                <Text style={styles.mapMarkerTitle}>Mercado</Text>
                            </View>
                        </Marker>
                    </MapView>
                </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <Icon name="box" size={42} />
                        <Text style={styles.itemTitle}>Lâmpada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }}>
                        <Icon name="box" size={42} />
                        <Text style={styles.itemTitle}>Lâmpada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }}>
                        <Icon name="box" size={42} />
                        <Text style={styles.itemTitle}>Lâmpada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }}>
                        <Icon name="box" size={42} />
                        <Text style={styles.itemTitle}>Lâmpada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }}>
                        <Icon name="box" size={42} />
                        <Text style={styles.itemTitle}>Lâmpada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { }}>
                        <Icon name="box" size={42} />
                        <Text style={styles.itemTitle}>Lâmpada</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20,
    },

    buttomBack: {
        alignSelf: 'flex-start',
        transform: [{ rotateY: '180deg' }],
        padding: 4,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },

    mapMarkerTitle: {
        flex: 1,
        fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23,
    },

    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
    },

    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',

        textAlign: 'center',
    },

    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2,
    },

    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 13,
    },
});

export default Points