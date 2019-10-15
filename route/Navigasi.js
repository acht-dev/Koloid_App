import React, { Component } from 'react'
import { Icon } from 'native-base'
import Home from '../screen/Home'
import ListMateri from '../screen/ListMateri'
import Penjelasan from '../screen/Penjelasan'
import Tentang from '../screen/Tentang'
import Quiz from '../screen/Quiz'
import JenisKoloid from '../screen/JenisKoloid'
import SifatKoloid from '../screen/SifatKoloid'
import Dispersi from '../screen/Dispersi'
import Kondensasi from '../screen/Kondensasi'
import DashQuiz from '../screen/DashQuiz'
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'

const cobaStack = createStackNavigator({
    Beranda: Home,
    Materi: ListMateri,
    Penjelasan: Penjelasan,
    About: Tentang,
    Kuis: DashQuiz,
    Jenis: JenisKoloid,
    Sifat: SifatKoloid
}, {
    initialRouteName: 'Beranda',
});

const Distack = createStackNavigator({
    Dispersi: Dispersi
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.navigate('Materi')}
                    name="md-arrow-back" size={30} />
            )
        };
    }
});

const KondenStack = createStackNavigator({
    Kondensasi: Kondensasi
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.navigate('Materi')}
                    name="md-arrow-back" size={30} />
            )
        };
    }
});
const cobain = createBottomTabNavigator({
    Dispersi: Distack,
    Kondensasi: KondenStack
}, {
    tabBarOptions: {
        inactiveTintColor: 'white',
        activeTintColor: '#00FFFF',
        tabStyle: {
            paddingBottom: 15
        }, style: {
            backgroundColor: '#2D4262',
            color: 'white'
        }
    }
});

const Quizu = createStackNavigator({
    Quiz1: Quiz
});

export default Main = createAppContainer(createSwitchNavigator({
    Coba: cobaStack,
    cobain1: cobain,
    Quizu1: Quizu
}, {
    initialRouteName: 'Coba'
}));
