import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import {Pressable, StyleSheet, Text, View,Image} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { styling } from '../styles/styles';

export const Component3 = ({navigation}) => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = 'You pressed it ' +timesPressed + ' times' ;
  } else if (timesPressed > 0) {
    textLog = 'You pressed it one time';
  }

  const resetPressCount = () => {
    setTimesPressed(0);
  };

  return (
    <SafeAreaView style={styling.main}>
    <Image source={require('../components/physics.png')} style={styling.logo}/>
    <Card style={{width:300,alignSelf:'center'}}>
    <View style={{margin:10}}>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        >
        {({pressed}) => (
          <Text style={{fontSize:20}}>{pressed ? 'Pressed!' : 'Press Me   <-----'}</Text>
        )}
      </Pressable>
      <View >
        <Text 
        style={{fontSize:20}}
        testID="pressable_press_console">{textLog}</Text>
      </View>
      <View>
            <Button
            mode="contained"
            buttonColor='skyblue'
            style={{ alignSelf:'right',margin:10}}
            onPress={resetPressCount} 
            >
            Reset
            </Button>
            <Button
            mode="contained"
            buttonColor='skyblue'
            style={{ margin: 10, width:100, alignSelf:'center'}}
            onPress={() => navigation.navigate('Modal')}
            >
            Next
            </Button>
      </View>
    </View>
    </Card>
    </SafeAreaView>
  );
};

