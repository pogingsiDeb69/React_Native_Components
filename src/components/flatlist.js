import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    Button
} from 'react-native';
import { Card } from 'react-native-paper';
import { styling } from '../styles/styles';


const DATA = [
    {id: '000-933',title: 'Deborah Jane Antopina',},
    {id: '000-944',title: 'Jesse Amang',},
    {id: '000-911',title: 'Kent Ivan Amora',},
    {id: '000-855',title: 'Ria Mae Angcahan',},
    {id: '000-874',title: 'Katherine Mae Ayuba',},
    {id: '000-966',title: 'Bernadeth Banaga',},
    {id: '000-984',title: 'Airen Mae Bongcaras',},
    {id: '000-932',title: 'James Warren Bucia',},
    {id: '000-912',title: 'Raymond Bunol',},
    {id: '000-827',title: 'Marlon Carbonilla',},
    {id: '000-754',title: 'Nathaniel Louise Coquilla',},
    {id: '000-763',title: 'Rhizabelle Jhaine Dalen',},
    {id: '000-122',title: 'Mary Ann Dela Cruz',},
    {id: '000-242',title: 'Sherline Rose Dondoyano',},
    {id: '000-452',title: 'Nelbrey Julian Escuadro',},
    {id: '000-356',title: 'Daisy Diane Eusalan',},
    {id: '000-451',title: 'Arnold James Felisilda',},
    {id: '000-657',title: 'Loui Fuentes',},
    {id: '000-951',title: 'Rodel Garcia',},
    {id: '000-123',title: 'Joana Jagunos',},
    {id: '000-659',title: 'Hershiel Jay Juntilla',},
    {id: '000-969',title: 'Sherwen Lahoy', },
    {id: '000-741', title: 'Jesriel Linog',},
    {id: '000-813',title: 'Hazel Mae Luayon',},
    {id: '000-252',title: 'Rusel Nino Madanguit',},
    {id: '000-361',title: 'Pearly Diane Magale',},
    {id: '000-314',title: 'Lovelyn Magsino',},
    {id: '000-543',title: 'Donilyn Magsino',},
    {id: '000-561',title: 'Angelo Maldora',},
    {id: '000-394',title: 'Ailen Mae Marabulas', },
    {id: '000-185',title: 'Cloyd Maslog',},
    {id: '000-923',title: 'Mic Roland Mirabite',},
    {id: '000-713',title: 'Jea Norene Oring',},
    {id: '000-847',title: 'Nicole James Paguican',},
    {id: '000-333',title: 'Arnel Pajota',},
    {id: '000-669',title: 'Jesrel Pilipino',},
    {id: '000-888',title: 'Earl Mike Sarabia',},
    {id: '000-445',title: 'Sheilo Saraga',},
    {id: '000-657',title: 'John Tabanyag',},
    {id: '000-111', title: 'Keneth Tadlas',},
    {id: '000-833',title: 'Adrian Jane Tahil', },
    {id: '000-555',title: 'Ma Luisa Tinaja',},
    {id: '000-999',title: 'Melrose Valiente',},
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export const Component6 = ({navigation}) => {
    return (
        <SafeAreaView style={styling.main}>
            <View style={{}}>
                <Image source={require('../components/physics.png')} style={styling.logo} />
            </View>
            <View style={{ width: 100, alignSelf: 'flex-end',}}>
                <Button
                    title='Next'
                    mode="contained"
                    buttonColor='skyblue'
                    style={{ margin: 5, width: 100, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('SearchBar')}
                >
                    Next
                </Button>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Basic FlatList Example</Text>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.title}</Text>
                        </View>
                    )}
                />
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'skyblue',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 5,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%'
    },
    listItemText: {
        fontSize: 18
    }
});

