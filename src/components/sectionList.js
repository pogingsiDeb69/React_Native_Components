import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
  Button
} from 'react-native';
import { styling } from '../styles/styles';
import { Card } from 'react-native-paper';

const DATA = [
  {
    title: 'FRUITS',
    data: ['Apple', 'Mango', 'Orange', 'Grapes'],
  },
  {
    title: 'VEGETABLES',
    data: ['Beans', 'Egg Plant', 'Cabbage', 'Bitter melon', 'Squash'],
  },
  {
    title: 'DRINKS',
    data: ['Water', 'Soft drinks', 'Beer', 'Champagne'],
  },
  {
    title: 'DESSERTS',
    data: ['Cakes', 'Ice Cream', 'Cookies'],
  },
];

const Component10 = ({navigation}) => (
  <SafeAreaView style={styling.main}>
  <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
      <View style={{ width:100, alignSelf:'flex-end',}}>
    <Button
      title='Next'
      mode="contained"
      buttonColor='skyblue'
      style={{  width: 100, alignSelf: 'center' }}
      onPress={() => navigation.navigate('Scroll View')}
    >
      Next
    </Button>
  </View>
  <Card style={styles.card}>
  <Text style={styles.text}>This is a section list</Text>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    </Card>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '',
    padding: 20,
    marginVertical: 8,
    borderBottomColor:'green',
    borderBottomWidth:2
    
  },
  header: {
    fontSize: 32,
    backgroundColor: 'skyblue',
    color:'black',
    borderColor:'blue',
    borderWidth:2,
    padding:5
    
  },
  title: {
    fontSize: 24,

  },
  card:{
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    
    width:250,
    padding:20,
    
    
    flexDirection:'row',
  
  },
  text:{
    fontSize:23,
    fontWeight:'bold',
    alignSelf:'center',
    marginBottom:20,
  }
});

export default Component10;