import * as React from 'react';
import { Card, Surface, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet,Image, View,Button } from 'react-native';
import { styling } from '../styles/styles';

const Component7 = ({navigation}) => (
  <SafeAreaView style={styling.main}>
  <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
  <Card style={{alignSelf:'center',width:200,height:200, alignItems:'center', alignContent:'center'}}>
  <Surface style={styles.surface} elevation={5}>
     <Text>Elevation 1</Text>
  </Surface>
  <View style={{ margin: 10 ,width:100, alignSelf:'flex-end',marginTop:50}}>
          <Button
            title='Next'
            mode="contained"
            buttonColor='skyblue'
            style={{ margin: 10, width: 100, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Switch')}
          >
            Next
          </Button>
        </View>
  </Card>
  </SafeAreaView>
);


export default Component7;

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: 80,
    width: 80,
    border: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginTop:10
  },

});