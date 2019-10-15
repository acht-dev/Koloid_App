import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Body, Left, Text, Thumbnail, Button } from 'native-base'
import { StylesSheet, View, ImageBackground, TouchableHighlight, Image } from 'react-native'
import Modal from "react-native-modal"

export default class Tentang extends Component {
    static navigationOptions = {
        title: 'Tentang',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };
    state = {
        isModalVisible: false,
    }
    pencetdah = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    render() {
        return (
            <ImageBackground source={require('../assets/background_3.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <Image source={require('../assets/yuli.png')} style={{ width: 300, height: 500, justifyContent:'center', alignSelf:'center' }} resizeMode='contain' />
                            <Button onPress={this.pencetdah} style={{marginTop: 10, width : 150, justifyContent:'center', alignSelf:'center'}}>
                                <Text>Kembali</Text>
                            </Button>
                        </View>
                    </Modal>
                    <View style={{ flex: 1 }}>
                        <Card style={{ marginTop: 15, opacity: 0.7 }}>
                            <CardItem>
                                <Left>
                                    <TouchableHighlight onPress={this.pencetdah}>
                                        <Thumbnail source={require('../assets/yuli.png')} />
                                    </TouchableHighlight>
                                </Left>
                                <Body>
                                    <Text>Tentang Aplikasi</Text>
                                    <Text note>Yuliana Kurniawati</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Body>
                                    <Text style={{ fontSize: 16 }}>Aplikasi Koloid Edukasi ini merupakan aplikasi yang digunakan sebagai media pembelajaran sederhana
yang membahas materi koloid untuk anak SMA guna melatih kemampuan anak SMA sejauh apa pemahamannya
terhadap pengetahuan koloid.</Text>
                                    <Text style={{ fontSize: 16, marginTop: 15 }}>Aplikasi ini berisikan materi yang mencakup penjelasan koloid, 8 jenis koloid, 5 sifat koloid
                                    serta 2 cara pembuatan koloid. Terdapat pula fitur "Latihan" sehingga pengguna dapat mengerjakan
20 soal mengenai koloid secara benar dan tepat.</Text>
                                    <Text style={{ fontSize: 16, marginTop: 15 }}>Nama 	: Yuliana Kurniawati{"\n"}
                                        NPM	: 57416852{"\n"}
                                        Kelas	: 3IA18{"\n"}
                                        Jurusan	: Teknik Informatika, Universitas Gunadarma</Text>
                                    <Text style={{ fontSize: 16, marginTop: 15 }}>Kontak{"\n"}
                                        081806007175{"\n"}
                                        yulianakurniawati22@gmail.com</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}