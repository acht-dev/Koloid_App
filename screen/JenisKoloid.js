import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native'
import { Container, Content, Card, CardItem, Left, Body, Text } from 'native-base'
import ImageZoom from 'react-native-image-pan-zoom'

export default class JenisKoloid extends Component {
    static navigationOptions = {
        title: 'Jenis Koloid',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };
    render() {
        return (
            <ImageBackground source={require('../assets/background_1.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content>
                    <View style={{ flex: 1 }}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>AEROSOL CAIR</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/kabut.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Cair</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Gas</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>AEROSOL PADAT</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/kabut.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Padat</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Gas</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>EMULSI</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/susu.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Cair</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Cair</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>EMULSI PADAT/GEL</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/Keju.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Cair</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Padat</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>SOL</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/cat.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Padat</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Cair</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>SOL PADAT</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/kacawarna.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Padat</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Padat</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>BUIH/BUSA</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/buihsabun.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Gas</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Cair</Text>
                                </Left>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>BUIH/BUSA PADAT</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../assets/gambar1/apung.png')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Fase Terdispresi : Gas</Text>
                                </Left>
                                <Left>
                                    <Text>Fase Pendispresi : Padat</Text>
                                </Left>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}