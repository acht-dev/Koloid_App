import React, { Component } from 'react'
import { Container, Content, Header, Button, Body, Left, Icon, Title, Right } from 'native-base'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Modal from "react-native-modal"
import Slideshow from 'react-native-image-slider-show';

export default class SifatKoloid extends Component {
    static navigationOptions = {
        title: 'Sifat Koloid',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };

    state = {
        isModalVisible: false,
        isModalVisible2: false,
        isModalVisible3: false,
        isModalVisible4: false,
        isModalVisible5: false,
        isModalVisible6: false
    };

    pencetdah = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    pencetdah2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
    }

    pencetdah3 = () => {
        this.setState({ isModalVisible3: !this.state.isModalVisible3 });
    }

    pencetdah4 = () => {
        this.setState({ isModalVisible4: !this.state.isModalVisible4 });
    }

    pencetdah5 = () => {
        this.setState({ isModalVisible5: !this.state.isModalVisible5 });
    }

    pencetdah6 = () => {
        this.setState({ isModalVisible6: !this.state.isModalVisible6 });
    }
    render() {
        return (
            <ImageBackground source={require('../assets/background_2.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content>
                    <View style={{ flex: 1, marginTop: 40 }}>
                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={this.pencetdah}>
                            <Text>Efek Tyndall</Text>
                        </Button>
                        <Modal isVisible={this.state.isModalVisible}>
                            <Container>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={this.pencetdah}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title>Efek Tyndall</Title>
                                    </Body>
                                </Header>
                                <Content>
                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                                        <Text>Peristiwa penghamburan cahaya oleh partikel-partikel koloid.</Text>
                                        <Text>Contoh: langit tampak berwarna biru sinar matahari yang melewati celah-celah, sorot lampu mobil yang mengenai hujan.</Text>
                                        <Slideshow
                                            style={{ marginTop: 10 }}
                                            dataSource={[
                                                { url: require('../assets/gambar2/tyndall/langitbiru.png') },
                                                { url: require('../assets/gambar2/tyndall/sinarmatahari.png') },
                                                { url: require('../assets/gambar2/tyndall/sorotlampu.png') }
                                            ]} />
                                    </View>
                                </Content>
                            </Container>
                        </Modal>

                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={this.pencetdah2}>
                            <Text>Gerak Brown</Text>
                        </Button>
                        <Modal isVisible={this.state.isModalVisible2}>
                            <Container>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={this.pencetdah2}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title>Gerak Brown</Title>
                                    </Body>
                                </Header>
                                <Content>
                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                                        <Text>Gerak zigzag partikel koloid karena tumbukan antarpertikel atau dengan medium pendispersi.</Text>
                                        <Text>Contoh: gerakan partikel-partikel debu di udara.</Text>
                                        <Slideshow
                                            style={{ marginTop: 10 }}
                                            dataSource={[
                                                { url: require('../assets/gambar2/GerakBrown.png') },
                                            ]} />
                                    </View>
                                </Content>
                            </Container>
                        </Modal>

                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={this.pencetdah3}>
                            <Text>Elektroforesis</Text>
                        </Button>
                        <Modal isVisible={this.state.isModalVisible3}>
                            <Container>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={this.pencetdah3}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title>Elektroforesis</Title>
                                    </Body>
                                </Header>
                                <Content>
                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                                        <Text>Elektroforesis merupakan metode pemisahan berdasarkan perbedaan laju perpindahan(pergerakan) molekul koloid dalam medan listrik. Melalui elektroforesis muatan partikel koloid dapat ditentukan. partikel koloid yang bermuatan negatif akan bergerak ke elektrode positif (muatan positif) dan yang bermuatan positif akan bergerak ke elektrode negatif (katode).</Text>
                                        <Slideshow
                                            style={{ marginTop: 10 }}
                                            dataSource={[
                                                { url: require('../assets/gambar2/Elektroforesis.png') },
                                            ]} />
                                    </View>
                                </Content>
                            </Container>
                        </Modal>

                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={this.pencetdah4}>
                            <Text>Adsorbsi</Text>
                        </Button>
                        <Modal isVisible={this.state.isModalVisible4}>
                            <Container>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={this.pencetdah4}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title>Adsorbsi</Title>
                                    </Body>
                                </Header>
                                <Content>
                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                                        <Text>Peristiwa penyerapan muatan oleh partikel koloid. Hal ini terjadi karena partikel koloid mempunyai kemampuan menarik partikel-partikel kecil.</Text>
                                        <Text>Contoh: pemutihan gula pasir, penggunaan norit untuk obat diare, penghilangan bau badan menggunakan deodoran, penjernihan air menggunakan tawas.</Text>
                                        <Slideshow
                                            style={{ marginTop: 10 }}
                                            dataSource={[
                                                { url: require('../assets/gambar2/putihgula.png') },
                                            ]} />
                                    </View>
                                </Content>
                            </Container>
                        </Modal>

                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={this.pencetdah5}>
                            <Text>Koagulasi</Text>
                        </Button>
                        <Modal isVisible={this.state.isModalVisible5}>
                            <Container>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={this.pencetdah5}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title>Koagulasi</Title>
                                    </Body>
                                </Header>
                                <Content>
                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                                        <Text>Koagulasi adalah proses penggumpalan partikel-partikel koloid.</Text>
                                        <Text>Contoh: pembentukan delta sungai(pencampuran koloid beda muatan), proses perebusan telur (mekanik), penggumpalan getah karet dengan penambahan asam cuka glasial (kimia).</Text>
                                        <Slideshow
                                            style={{ marginTop: 10 }}
                                            dataSource={[
                                                { url: require('../assets/gambar2/Koagulasi/delta.png') },
                                                { url: require('../assets/gambar2/Koagulasi/rebustelur.png') }
                                            ]} />
                                    </View>
                                </Content>
                            </Container>
                        </Modal>

                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={this.pencetdah6}>
                            <Text>Dialisis</Text>
                        </Button>
                        <Modal isVisible={this.state.isModalVisible6}>
                            <Container>
                                <Header>
                                    <Left>
                                        <Button transparent onPress={this.pencetdah6}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title>Dialisis</Title>
                                    </Body>
                                </Header>
                                <Content>
                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                                        <Text>Proses pemisahan koloid dari ion-ion pengganggu kestabilan koloid dengan mengalirkannya melalui selaput semipermeabel.</Text>
                                        <Text>Contoh: proses pencucian darah.</Text>
                                        <Slideshow
                                            style={{ marginTop: 10 }}
                                            dataSource={[
                                                { url: require('../assets/gambar2/Dialisis.png') },
                                            ]} />
                                    </View>
                                </Content>
                            </Container>
                        </Modal>

                    </View>
                </Content>
            </ImageBackground>
        );
    }
}