import React, { Component } from 'react'
import { Container, Content, Header, Button, Body, Left, Icon, Title, Right } from 'native-base'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

export default class ListMateri extends Component {
    static navigationOptions = {
        title: 'List Materi',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };
    render() {
        return (
            <ImageBackground source={require('../assets/background_3.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content>
                    <View style={{ flex: 1, marginTop: 150 }}>
                        <Button block style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={() => this.props.navigation.navigate('Penjelasan')}>
                            <Text>Penjelasan Koloid</Text>
                        </Button>
                        <Button block success style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={() => this.props.navigation.navigate('Jenis')}>
                            <Text>Jenis - Jenis Koloid</Text>
                        </Button>
                        <Button block info style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={() => this.props.navigation.navigate('Sifat')}>
                            <Text>Sifat - Sifat Koloid</Text>
                        </Button>
                        <Button block warning style={{ borderRadius: 10, width: 250, justifyContent: 'center', alignSelf: 'center', marginBottom: 15 }}
                            onPress={() => this.props.navigation.navigate('Dispersi')}>
                            <Text>Pembuatan Koloid</Text>
                        </Button>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}