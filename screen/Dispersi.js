import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { Container, Content, Card, CardItem, Body } from 'native-base'

export default class Dispersi extends Component {
    static navigationOptions = {
        title: 'Pembuatan Koloid',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };
    render() {
        return (
            <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content>
                    <View style={{ flex: 1, marginTop: 15 }}>
                        <Card>
                            <CardItem header style={{ justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Cara Dispersi</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Partikel kasar dapat diubah menjadi partikel berukuran koloid dengan cara dispersi. yaitu:</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>CARA MEKANIK</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Cara mekanik yang paling umum dilakukan dengan penggerusan dengan alat colloid mill, selanjutnya partikel halus didispersikan pada medium pendispersi.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>CARA BUSUR BREDIG</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Cara busur bredig dapat dikatakan merupakan gabungan dari caara dispersi dan kondensasi. Hal ini bisa dijelaskan dalam pembuatan sol logam. Logam yang dibuat sol digunakan sebagai elekrode yang dicelupkan dalam medium pendispersi. Kedua ujung elektrode dihubungkan dengan arus listrik. Uap-uap atom logam akan mengalami kondensasi membentuk koloid.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>CARA PEPTISASI(PEMECAHAN)</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Metode ini menggunakan suatu zat pemecah dalam larutan elektrolit yang akan mengubah partikel kasar menjadi partikel koloid. {"\n"}Contoh peptisasi adalah: endapan NiS dipeptisasi dengan H2S, agar-agar dipeptisasi dengan air, serat selulosa setat dipeptisasi dengan aseton, endapan Al(OH)3 dipeptisasi dengan AlCl3.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>CARA HOMOGENISASI</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Cara homogenisasi digunakan dalam pembuatan emulsi. Partikel lemak yang kasar dihaluskan kemudian didispersikan dalam air ditambah dengan emulgator(pengemulsi). Dengan alat homogenizer, campuran diubah menjadi emulsi yang homogen.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}