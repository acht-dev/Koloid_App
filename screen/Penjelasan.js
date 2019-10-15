import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { Container, Content, Card, CardItem, Body } from 'native-base'

export default class Penjelasan extends Component {
    static navigationOptions = {
        title: 'Penjelasan',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };
    render() {
        return (
            <ImageBackground source={require('../assets/background_2.png')} style={{ flex: 1 }} resizeMode="cover">
                <Content>
                    <View style={{ flex: 1 }}>
                        <Card style={{ marginTop: 50, opacity: 0.7 }}>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Apa Itu Koloid?</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={{ fontSize: 18 }}>Sebelum mengetahui lebih lanjut tentang sistem koloid, kita harus mengetahui adanya sistem dispersi.
    Sistem dispersi adalah sistem penyebaran, dua fase zat yang terdiri dari fase pendispersi dan fase terdispersi.
    Koloid merupakan campuran zat dimana ukuran partikel terlarutnya lebih kecil dari suspensi dan lebih besar dari larutan.
    Koloid terdiri dari fase terdispersi dan medium pendispersi. Fase pendispersi adalah medium yang memiliki fase tetap
sedangkan fase terdispersi adalah zat yang fasenya berubah.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}