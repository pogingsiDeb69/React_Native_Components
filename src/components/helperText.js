
import React, { useState } from 'react';
import { SafeAreaView, View,Text, Image,Button } from 'react-native';
import { Card, HelperText, TextInput } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component15 = (navigation) => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const handleValidation = (text) => {
      // A basic email validation regex pattern
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
      if (emailPattern.test(text)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
  
      setEmail(text);
    };

 return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
            <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
    <Card style={{height:200}}>
    <Text style={{fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,}}>Helper Text</Text>
    <View>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => handleValidation(text)}
        />
        <HelperText type="error" visible={!isValid}>
          Invalid email format
        </HelperText>
        <View style={{width:100,height:1}}>
        <Button
        title='Submit'
        mode="contained"
        buttonColor='skyblue'
        style={{ width: 100, alignSelf: 'center' }}
          onPress={() => console.log(`Email: ${email}`)}
        >
        </Button>
        </View>
      </View>

      <View style={{ width: 100, alignSelf: 'flex-end', marginTop:30}}>
                <Button
                    title='Next'
                    mode="contained"
                    buttonColor='skyblue'
                    style={{ width: 100, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Dropdown')}
                >
                    Next
                </Button>
            </View>
    </Card>
    </SafeAreaView>
  );
};

export default Component15;