import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { Container, Content, Card, CardItem, Body } from 'native-base'

export default class Kondensasi extends Component {
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
                                <Text style={{ fontWeight: 'bold' }}>Cara Kondensasi</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Untuk menghasilkan ukuran partikel yang sesuai, maka dapat dilakukan dengan menggabungkan partikel-partikel larutan menjadi berukuran koloid. Penggabungan partikel larutan tersebut dapat dilakukan dengan reaksi kimia.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>REAKSI REDOKS</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Reaksi yang disertai mekanisme perubahan bilangan oksidasi. Contoh pembuatan koloid dengan reaksi redoks adalah : {"\n"} 1) Pembuatan sol belerang melalui reaksi : {"\n"} 2H2S(aq) + SO2(aq)  -> 3S(s) + 2H2O(l)</Text>
                                    <Text>2) Pembuatan sol emas melalui reaksi: {"\n"} 2AuCl3(aq) + 3HCOH(aq) + 3H2O(l) -> 2Au(s) + 6HCl(aq) + 3HCOOH(aq)</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>REAKSI HIDROLISIS</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Pembentukan koloid dengan medium pendispersi air menggunakan reaksi hidrolisis. {"\n"} Contoh pembuatan sol Al(OH)3 dari larutan AlCl3 {"\n"}</Text>
                                    <Text>AlCl3(aq) + 3H2O(l) -> Al(OH)3(s) + 3HCl(aq)</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>PENJENUHAN LARUTAN DAN PENGGANTIAN PELARUT</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Penjenuhan kalsium asetat yang telah jenuh akan membentuk koloid berupa gel bila ditambah dengan pelarut alkohol. Hal itu disebabkan kalsium asetat mudah larut dalam air tapi sukar larut dalam alkohol.</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text style={{ fontWeight: 'bold' }}>PERTUKARAN ION</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Pertukaran ion, pembuatan sol As2S3 dengan mengalirkan gas H2S ke dalam larutan As2O3</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}