import React, { Component } from 'react';
import { Image, Text, ImageBackground } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button, Radio, ListItem, Right, List, Content, Item } from 'native-base';
import { RadioGroup } from 'react-native-btr';
//import cards from './Db_quiz'

const cards = [
    {
        id: '1',
        soal: '1. Perhatikan beberapa sistem dispersi berikut ! \n 1. Gel \n 2. Cat \n 3.Sus \n 4. Kanji \n 5. Agar - Agar \n Sistem dispersi yang tergolong  emulsi ditunjukkan oleh nomor...',
        jawaban_a: '1',
        jawaban_b: '2',
        jawaban_c: '3',
        jawaban_d: '4',
        jawaban_e: '5',
        jawab: 'C'
    },
    {
        id: '2',
        soal: '2. Berikut ini yang bukan merupakan sistem koloid adalah ...',
        jawaban_a: 'Lateks',
        jawaban_b: 'Air Sadah',
        jawaban_c: 'Tinta',
        jawaban_d: 'Margarine',
        jawaban_e: 'Batu Apung',
        jawab: 'B'
    }, {
        id: '3',
        soal: 'Buih adalah ...',
        jawaban_a: 'Zat padat terdispersi dalam zat cair',
        jawaban_b: 'Zat cair terdispersi dalam gas',
        jawaban_c: 'Gas terdispersi dalam zat padat',
        jawaban_d: 'Gas terdispersi dalam zat cair',
        jawaban_e: 'Zat cair terdispersi dalam zat cair',
        jawab: 'D'
    }, {
        id: '4',
        soal: 'Efek tyndall terjadi karena partikel koloid ...',
        jawaban_a: 'Memancarkan cahaya',
        jawaban_b: 'Menyerap cahaya',
        jawaban_c: 'Meneruskan cahaya',
        jawaban_d: 'Menghamburkan cahaya',
        jawaban_e: 'Mempunyai gerak Brown',
        jawab: 'D'
    }, {
        id: '5',
        soal: 'Kelebihan elektrolit dalam suatu dispersi koloid biasanya dihilangkan dengan ...',
        jawaban_a: 'Elektrolisis',
        jawaban_b: 'Elektroforesis',
        jawaban_c: 'Dialisis',
        jawaban_d: 'Dekalisis',
        jawaban_e: 'Presipitasi',
        jawab: 'C'
    }, {
        id: '6',
        soal: 'Koagulasi koloid dapat terjadi jika : \n 1. Koloid dipanaskan \n 2. Mencampurkan dua macam koloid \n 3. Ditambahkan zat elektrolit \n 4. Partikel koloid didialisis \n Pernyataan yang benar adalah nomor ...',
        jawaban_a: '1, 2 dan 3',
        jawaban_b: '1 dan 3',
        jawaban_c: '2 dan 4',
        jawaban_d: '4',
        jawaban_e: 'Semua Benar',
        jawab: 'A'
    }, {
        id: '7',
        soal: 'Koloid berbeda dengan suspensi dalam hal berikut ini \n 1. Ukuran partikel \n 2. Homogenitas sistem \n 3. Kestabilan sistem \n 4. Gerak partikel \n Pernyataan yang benar adalah ...',
        jawaban_a: '1, 2, 3',
        jawaban_b: '1 dan 3',
        jawaban_c: '2 dan 4',
        jawaban_d: '4',
        jawaban_e: 'Semua Benar',
        jawab: 'A'
    }, {
        id: '8',
        soal: 'Efek penghamburan cahaya dari lampu mobil oleh partikel dalam kabut disebut ...',
        jawaban_a: 'Elektroforesis',
        jawaban_b: 'Tyndall',
        jawaban_c: 'Brown',
        jawaban_d: 'Dialisis',
        jawaban_e: 'Adsorpsi',
        jawab: 'B'
    }, {
        id: '9',
        soal: 'Sistem koloid yang dibentuk dengan mendispersikan partikel zat padat ke dalam zat cair disebut ...',
        jawaban_a: 'Gel',
        jawaban_b: 'Buih',
        jawaban_c: 'Emulsi',
        jawaban_d: 'Sol',
        jawaban_e: 'Aerosol',
        jawab: 'D'
    }, {
        id: '10',
        soal: 'Koloid As2S3 adalah koloid hidrofob yang bermuatan negatif. Dalam larutan yang paling baik untuk mengkoagulasikan koloid ini adalah ...',
        jawaban_a: 'Kalium Fosfor',
        jawaban_b: 'Magnesium Sulfat',
        jawaban_c: 'Barium Nitrat',
        jawaban_d: 'Besi Klorida',
        jawaban_e: 'Besi Sulfat',
        jawab: 'D'
    }, {
        id: '11',
        soal: 'Contoh koloid yang merupakan sistem koloid padat di dalam gas adalah ...',
        jawaban_a: 'Kabut',
        jawaban_b: 'Embun',
        jawaban_c: 'Asap',
        jawaban_d: 'Buih',
        jawaban_e: 'Batu Apung',
        jawab: 'C'
    }, {
        id: '12',
        soal: 'Perhatikan sifat - sifat berikut ! \n 1. Dapat mengadsorpsi ion \n 2. Menghamburkan cahaya \n 3. Partikelnya selalu bergerak \n 4. Dapat bermuatan listrik \n Yang merupakan sifat koloid yaitu ...',
        jawaban_a: '1, 2 dan 3',
        jawaban_b: '1 dan 3',
        jawaban_c: '2 dan 4',
        jawaban_d: '4',
        jawaban_e: 'Semua Benar',
        jawab: 'E'
    }, {
        id: '13',
        soal: 'Berikut ini beberapa sifat koloid \n 1. Elektroforesis \n 2. Efek tyndall \n 3. Koagulasi \n 4. Gerak Brown \n 5. Dialisis \n Proses penjernihan air menggunakan tawa merupakan penerapan sifat koloid nomor ...',
        jawaban_a: '1',
        jawaban_b: '2',
        jawaban_c: '3',
        jawaban_d: '4',
        jawaban_e: '5',
        jawab: 'C'
    }, {
        id: '14',
        soal: 'Buih adalah sistem dispersi pada ...',
        jawaban_a: 'Zat padat terdispersi dalam zat cair',
        jawaban_b: 'Zat cair terdispersi dalam gas',
        jawaban_c: 'Gas terdispersi dalam zat padat',
        jawaban_d: 'Gas terdispersi dalam zat cair',
        jawaban_e: 'Zat cair terdispersi dalam zat cair',
        jawab: 'D'
    }, {
        id: '15',
        soal: 'Pembuatan sol Fe(OH)3 dilakukan dengan cara ...',
        jawaban_a: 'Mekanik',
        jawaban_b: 'Peptisasi',
        jawaban_c: 'Dekomposisi rangkap',
        jawaban_d: 'Hidrolisis',
        jawaban_e: 'Reaksi redoks',
        jawab: 'D'
    }, {
        id: '16',
        soal: 'Cara pembuatan koloid molekul-molekul atau ion-ion menjadi pertikel-partikel koloid disebut...',
        jawaban_a: 'Cara kondensasi',
        jawaban_b: 'Cara Dispersi',
        jawaban_c: 'Cara suspensi',
        jawaban_d: 'Cara koagulasi',
        jawaban_e: 'Cara mekanik',
        jawab: 'D'
    }, {
        id: '17',
        soal: 'Berikut ini beberapa fenomena sehari-hari yang menunjukkan sifat koloid dalam kehidupan. \n 1. Proses cuci darah \n 2. Kabut di pegunungan \n 3. Pembentukan delta di muara sungai \n 4. Pemutihan gula \n 5. Proses kerja obat diare \n Sifat koagulasi dapat ditunjukkan dalam contoh kejadian nomor... ',
        jawaban_a: '1',
        jawaban_b: '2',
        jawaban_c: '3',
        jawaban_d: '4',
        jawaban_e: '5',
        jawab: 'C'
    }, {
        id: '18',
        soal: 'Di bawah ini yang termasuk koloid hidrofil adalah ...',
        jawaban_a: 'Susu',
        jawaban_b: 'Agar - Agar',
        jawaban_c: 'Mayonaise',
        jawaban_d: 'Sol Logam',
        jawaban_e: 'Sol Sulfida',
        jawab: 'B'
    }, {
        id: '19',
        soal: 'Minyak kelapa dan air tidak dapat bercampur dan terjadi dua lapisan yang tidak saling melarutkan. Emulsi akan terjadi bila campuran dikocok dan ditambah dengan...',
        jawaban_a: 'Air Panas',
        jawaban_b: 'Es',
        jawaban_c: 'Air sabun',
        jawaban_d: 'Minyak tanah',
        jawaban_e: 'Larutan garam',
        jawab: 'C'
    }, {
        id: '20',
        soal: 'Koloid Fe(OH)3 akan terkoagulasi bila dicampur dengan koloid As2S3 karena...',
        jawaban_a: 'Koloid As2S3 bersifat hidrofil',
        jawaban_b: 'Koloid As2S3 menyerap anion',
        jawaban_c: 'Kedua koloid berbeda muatan',
        jawaban_d: 'Kedua koloid bermuatan sama',
        jawaban_e: 'Koloid Fe(OH)3 bermuatan negatif',
        jawab: 'C'
    }
];

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasil: '',
            ja: true,
            jb: false,
            jc: false,
            jd: false,
            je: false,
            ans: 'A',
            total: 0
        }
    }

    toggle_a() {
        this.setState({
            ja: true,
            jb: false,
            jc: false,
            jd: false,
            je: false,
            ans: 'A'
        });
    }
    toggle_b() {
        this.setState({
            ja: false,
            jb: true,
            jc: false,
            jd: false,
            je: false,
            ans: 'B'
        });
    }
    toggle_c() {
        this.setState({
            ja: false,
            jb: false,
            jc: true,
            jd: false,
            je: false,
            ans: 'C'
        });
    }
    toggle_d() {
        this.setState({
            ja: false,
            jb: false,
            jc: false,
            jd: true,
            je: false,
            ans: 'D'
        });
    }
    toggle_e() {
        this.setState({
            ja: false,
            jb: false,
            jc: false,
            jd: false,
            je: true,
            ans: 'E'
        });
    }

    resetAns() {
        this.setState({
            ja: true,
            jb: false,
            jc: false,
            jd: false,
            je: false,
            ans: 'A'
        })
    }

    checkJawaban(id, c) {
        const { ans } = this.state;
        cards.map((items, i) => {
            if (items.id == id) {
                if (items.jawab == ans) {
                    alert('Benar');
                    this.resetAns();
                    this._deckSwiper._root.swipeLeft();
                    this.state.total = this.state.total + 10;
                } else {
                    alert('Salah');
                    this.resetAns();
                    this._deckSwiper._root.swipeLeft();
                }
            }
        })
    }

    static navigationOptions = {
        title: 'Quiz Koloid',
        headerStyle: {
            backgroundColor: '#2D4262'
        }, headerTintColor: '#fff'
    };

    render() {
        return (
            <ImageBackground source={require('../assets/background_3.png')} style={{ flex: 1 }} resizeMode='cover'>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        looping={false}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Hasil Jawaban</Text>
                                <Text>{this.state.total}</Text>
                                <Item>
                                    <Button onPress={() => this.props.navigation.navigate('Kuis')}>
                                        <Text>Kembali Ke Dashboard Quiz</Text>
                                    </Button>
                                </Item>
                            </View>
                        }
                        renderItem={(item) =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem header>
                                    <Text>Soal No {item.id}</Text>
                                </CardItem>
                                <CardItem cardBody style={{ paddingBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
                                    <Text>{item.soal}</Text>
                                </CardItem>
                                <Content>
                                    <ListItem>
                                        <Left>
                                            <Text>A. {item.jawaban_a}</Text>
                                        </Left>
                                        <Right>
                                            <Radio selected={this.state.ja} onPress={() => this.toggle_a()} />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text>B. {item.jawaban_b}</Text>
                                        </Left>
                                        <Right>
                                            <Radio selected={this.state.jb} onPress={() => this.toggle_b()} />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text>C. {item.jawaban_c}</Text>
                                        </Left>
                                        <Right>
                                            <Radio selected={this.state.jc} onPress={() => this.toggle_c()} />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text>D. {item.jawaban_d}</Text>
                                        </Left>
                                        <Right>
                                            <Radio selected={this.state.jd} onPress={() => this.toggle_d()} />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text>E. {item.jawaban_e}</Text>
                                        </Left>
                                        <Right>
                                            <Radio selected={this.state.je} onPress={() => this.toggle_e()} />
                                        </Right>
                                    </ListItem>
                                </Content>
                                <View style={{ flexDirection: "row", flex: 1, justifyContent: 'space-between', padding: 15 }}>
                                    <View>

                                    </View>
                                    <Button style={{ width: 150 }} iconRight onPress={() => this.checkJawaban(item.id, this._deckSwiper)}>
                                        <Icon style={{ paddingLeft: 10 }} name="arrow-forward" />
                                        <Text style={{ paddingRight: 10, color: 'white' }}>Next</Text>
                                    </Button>
                                </View>
                            </Card>
                        }
                    />
                </View>
            </ImageBackground>
        );
    }
}
