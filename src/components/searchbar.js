import React, { useState, useEffect } from 'react';
import { TextInput, View, Image, FlatList, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { styling } from '../styles/styles';
import { Card } from 'react-native-paper';

const DATA = [
  { id: '000-933', title: 'Deborah Jane Antopina' },
  { id: '000-944', title: 'Jesse Amang' },
  { id: '000-911', title: 'Kent Ivan Amora', },
  { id: '000-855', title: 'Ria Mae Angcahan', },
  { id: '000-874', title: 'Katherine Mae Ayuba', },
  { id: '000-966', title: 'Bernadeth Banaga', },
  { id: '000-984', title: 'Airen Mae Bongcaras', },
  { id: '000-932', title: 'James Warren Bucia', },
  { id: '000-912', title: 'Raymond Bunol', },
  { id: '000-827', title: 'Marlon Carbonilla', },
  { id: '000-754', title: 'Nathaniel Louise Coquilla', },
  { id: '000-763', title: 'Rhizabelle Jhaine Dalen', },
  { id: '000-122', title: 'Mary Ann Dela Cruz', },
  { id: '000-242', title: 'Sherline Rose Dondoyano', },
  { id: '000-452', title: 'Nelbrey Julian Escuadro', },
  { id: '000-356', title: 'Daisy Diane Eusalan', },
  { id: '000-451', title: 'Arnold James Felisilda', },
  { id: '000-607', title: 'Loui Fuentes', },
  { id: '000-951', title: 'Rodel Garcia', },
  { id: '000-123', title: 'Joana Jagunos', },
  { id: '000-659', title: 'Hershiel Jay Juntilla', },
  { id: '000-969', title: 'Sherwen Lahoy', },
  { id: '000-741', title: 'Jesriel Linog', },
  { id: '000-813', title: 'Hazel Mae Luayon', },
  { id: '000-252', title: 'Rusel Nino Madanguit', },
  { id: '000-361', title: 'Pearly Diane Magale', },
  { id: '000-314', title: 'Lovelyn Magsino', },
  { id: '000-543', title: 'Donilyn Magsino', },
  { id: '000-561', title: 'Angelo Maldora', },
  { id: '000-394', title: 'Ailen Mae Marabulas', },
  { id: '000-185', title: 'Cloyd Maslog', },
  { id: '000-923', title: 'Mic Roland Mirabite', },
  { id: '000-713', title: 'Jea Norene Oring', },
  { id: '000-847', title: 'Nicole James Paguican', },
  { id: '000-333', title: 'Arnel Pajota', },
  { id: '000-669', title: 'Jesrel Pilipino', },
  { id: '000-888', title: 'Earl Mike Sarabia', },
  { id: '000-445', title: 'Sheilo Saraga', },
  { id: '000-651', title: 'John Tabanyag', },
  { id: '000-111', title: 'Keneth Tadlas', },
  { id: '000-833', title: 'Adrian Jane Tahil', },
  { id: '000-555', title: 'Ma Luisa Tinaja', },
  { id: '000-999', title: 'Melrose Valiente', },
  // Add the rest of your data here
];

const Component1 = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  useEffect(() => {
    // Filter data initially
    filterData(searchQuery);
  }, []);

  const filterData = (query) => {
    const formattedQuery = query.toLowerCase();
    const filtered = DATA.filter((item) =>
      item.title.toLowerCase().includes(formattedQuery)
    );
    setFilteredData(filtered);
  };

  const renderDataItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styling.main}>
      <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
      <Card style={{ height: 300 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>Search Box</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          onChangeText={(text) => {
            setSearchQuery(text);
            filterData(text);
          }}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderDataItem}
        />

        <View style={{ width: 100, alignSelf: 'flex-end', marginTop: 30 }}>
          <Button
            title='Next'
            mode="contained"
            buttonColor='skyblue'
            style={{ width: 100, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Accordion Items')}
          >
            Next
          </Button>
        </View>
      </Card>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    height: 30,
  },
  item: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default Component1;
