import React from 'react';
import { View, Button, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Divider, Text, Card } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component19 = ({navigation}) => {
  return (
    <View style={styling.main}>
      <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
      
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Divider
        </Text>
        <View style={styles.container}>
          <Text>Deborah Jane Antopina</Text>
          <Divider style={{ backgroundColor: 'black',height:50}} ></Divider>
          <Text>Bachelor in Science in Information Technology 3A</Text>
        </View>
        <View style={{ width: 100, alignSelf: 'flex-end', marginTop: 30 }}>
          <Button
            title="Next"
            mode="contained"
            buttonColor="skyblue"
            style={{ width: 100, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Form')}
          >
            Next
          </Button>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default Component19;
