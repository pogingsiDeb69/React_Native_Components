//registerScreen

import React from 'react';
import {SafeAreaView, Text, Image,View, StyleSheet} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { styling } from '../styles/styles';

export const Component20 = (navigation) => {

	return(
		<SafeAreaView style={styling.main}>
        <View style={{ marginTop: 50, marginBottom: 0 }}>
          <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
        <Card>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            Text Input
          </Text>
          <View style={{}}>
					<TextInput label="Name"/>
					<TextInput label="Email" keyboardType="email-address"/>
					<TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" />}/>
					<TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off=outline" />}/>
					<TextInput label="Phone number" keyboardType="phone-pad"/>
					
				</View>

          <View style={{ width: 100, alignSelf:'center' ,marginTop: 30 }}>
            <Button
              title="Next"
              mode="contained"
              buttonColor="skyblue"
              style={{ width: 300, alignSelf: 'center' }}
              onPress={() => navigation.navigate('Main')}
            >
              Go back to main
            </Button>
          </View>
          </Card>
		</SafeAreaView>
	);
}

const registerStyle = StyleSheet.create({
    content:{
		padding:15,
		paddingTop: 0
	},
	
	button:{
		margin:15,
		marginLeft:0,
		marginRight:0
	}
  });