import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView,Image,Button,Text } from 'react-native';
import { Card, ProgressBar } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component12 = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress update over time
    const progressInterval = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.1);
      } else {
        clearInterval(progressInterval);
      }
    }, 1000);

    return () => clearInterval(progressInterval);
  }, [progress]);

  return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
          <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
    <Card style={{height:300}}>
    <Text style={styles.heading}>ProgressBar</Text>

    <View style={styles.container}>
      <ProgressBar progress={progress} color="blue" style={styles.smallProgressBar} />
      <ProgressBar progress={progress} color="green" style={styles.mediumProgressBar} />
      <ProgressBar progress={progress} color="red" style={styles.largeProgressBar} />
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
    
    </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  smallProgressBar: {
    width: 200, // Adjust the width as needed
    height: 8, // Adjust the height as needed
    marginVertical: 10,
  },
  mediumProgressBar: {
    width: 200, // Adjust the width as needed
    height: 16, // Adjust the height as needed
    marginVertical: 10,
  },
  largeProgressBar: {
    width: 200, // Adjust the width as needed
    height: 24, // Adjust the height as needed
    marginVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Component12;
