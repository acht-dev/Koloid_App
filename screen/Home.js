import React, { Component } from 'react'
import { View, Dimension, StyleSheet, Dimensions, ImageBackground, Image, Text } from 'react-native'
import { Container, Content } from 'native-base'
import { CardViewWithIcon, CardViewWithImage } from 'react-native-simple-card-view'
import MarqueeText from 'react-native-marquee'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            github: 0,
        }
        );
    }
    static navigationOptions = {
        header: null
    };

    render() {
        const miniCardStyle = {
            shadowColor: '#000000',
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: '#71c7ec',
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: (Dimensions.get("window").width / 2) - 10
        };
        return (
            <ImageBackground source={require('../assets/background.png')} resizeMode='cover' style={{ flex: 1 }}>
                <Content style={{ marginTop: 50 }}>
                    <View style={styles.container}>
                        <Text style={{ marginTop: 15, marginBottom: 15, fontSize: 36, fontWeight: 'bold', color: '#FFB532' }}>KOLOID EDUKASI</Text>
                        <MarqueeText
                            style={{ fontSize: 24, marginTop: 25 }}
                            duration={3000}
                            marqueeOnStart
                            loop
                            marqueeDelay={1000}
                            marqueeResetDelay={1000}>
                            Selamat Datang Di Aplikasi Koloid Edukasi Selamat Belajar, Semangat !
                        </MarqueeText>
                        <View style={{ marginTop: 30, alignItems: "center", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center' }}>
                            <CardViewWithImage
                                width={150}
                                source={require('../assets/Materi.png')}
                                title={'Materi'}
                                imageWidth={50}
                                imageHeight={50}
                                roundedImage={true}
                                roundedImageValue={25}
                                imageMargin={{ top: 10 }}
                                style={miniCardStyle}
                                onPress={() => this.props.navigation.navigate('Materi')}
                            />
                            <CardViewWithImage
                                width={150}
                                source={require('../assets/Latihan.png')}
                                title={'Latihan'}
                                imageWidth={50}
                                imageHeight={50}
                                roundedImage={true}
                                roundedImageValue={25}
                                imageMargin={{ top: 10 }}
                                style={miniCardStyle}
                                onPress={() => this.props.navigation.navigate('Kuis')}
                            />
                        </View>
                        <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', marginTop: 15 }}>
                            <CardViewWithImage
                                width={150}
                                source={require('../assets/tentang.png')}
                                title={'Tentang'}
                                imageWidth={50}
                                imageHeight={50}
                                roundedImage={true}
                                roundedImageValue={25}
                                imageMargin={{ top: 10 }}
                                style={miniCardStyle}
                                onPress={() => this.props.navigation.navigate('About')}
                            />
                        </View>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 25,
    },
});
