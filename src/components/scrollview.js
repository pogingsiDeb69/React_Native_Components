import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView,Image,Button ,ScrollView} from 'react-native';
import { styling } from '../styles/styles';
import { Card } from 'react-native-paper';

const Component11 = ({navigation}) => {
  return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
      <Card style={{height:200}}>
      <ScrollView style={styles.container}>
      <Text style={styles.heading}>ScrollView</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        convallis libero in eros ultricies, at aliquam quam congue. Integer
        tincidunt neque nec risus convallis, a feugiat sapien ultricies.
      </Text>
      <Text style={styles.text}>
        Vestibulum varius quam sit amet urna vehicula, eget interdum leo
        feugiat. Sed id tellus a est pharetra tristique. Quisque bibendum, purus
        ac tincidunt aliquam, turpis ex lobortis libero, nec elementum tortor
        arcu eget nunc.
      </Text>
      <Text style={styles.text}>
        Nullam sit amet libero id ligula eleifend vestibulum. Integer hendrerit,
        tortor eget ullamcorper vestibulum, ex nulla aliquam metus, nec laoreet
        lorem risus at lectus.
      </Text>
      <View style={{ margin: 10 ,width:100, alignSelf:'flex-end',marginTop:10}}>
    <Button
      title='Next'
      mode="contained"
      buttonColor='skyblue'
      style={{ margin: 10, width: 100, alignSelf: 'center' }}
      onPress={() => navigation.navigate('Progress Bar')}
    >
      Next
    </Button>
  </View>
    </ScrollView>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black', 
    
  },
});

export default Component11;