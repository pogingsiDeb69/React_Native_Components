import React from 'react';
import { View, Button, StyleSheet, Alert,Image,Text, SafeAreaView } from 'react-native';
import { styling } from '../styles/styles';
import { Card } from 'react-native-paper';

const Component17 = ({navigation})  => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is a simple alert message.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
            <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
    <Card style={{height:200}}>
    <Text style={{fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,}}>Alert</Text>
        <View style={styles.container}>
        <Button title="Show Alert" onPress={showAlert} />
      </View>
    <View style={{ width: 100, alignSelf: 'flex-end', marginTop:30}}>
    <Button
        title='Next'
        mode="contained"
        buttonColor='skyblue'
        style={{ width: 100, alignSelf: 'center' }}
        onPress={() => navigation.navigate('Checkbox')}
    >
        Next
    </Button>
</View>
    </Card>
    </SafeAreaView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Component17;
