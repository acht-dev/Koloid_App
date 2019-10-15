import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Container, Content } from 'native-base';

export default class DashQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: 'Ayo Quiz!',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };

    render() {
        return (
            <ImageBackground source={require('../assets/background_3.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content>
                    <View>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center' }}> Your High Score </Text>
                        <Button onPress={() => this.props.navigation.navigate('Quizu1')}
                            style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={{ color: 'white' }}>Ayo Mulai Quiz!</Text>
                        </Button>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}
