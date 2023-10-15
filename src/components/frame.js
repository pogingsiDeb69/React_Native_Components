import React, { useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { Button, Card, Appbar } from 'react-native-paper';
import { styling } from '../styles/styles';
import { SearchBar } from './searchbar';



// Import statements...

function Home({ navigation }) {
    return (
        <SafeAreaView style={styling.main}>
            <View style={{ alignItems: 'center', alignContent: 'center', margin: 100 }}>
                <View style={{ marginBottom: 50 }}>
                    <Image source={require('./physics.png')} style={{ width: 400, height: 400 }} />
                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 22 }}> WELCOME TO REACT NATIVE</Text>
                </View>
                <Card>
                    <View>
                        <Button
                            mode="contained"
                            buttonColor='skyblue'
                            style={{ margin: 10, }}
                            onPress={() => navigation.navigate('Flatlist')} // Pass the name of the screen as a string
                        >
                            Let's Get Started
                        </Button>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}

export const Wew = ({ navigation }) => {
    return (
        <Home navigation={navigation} />
    );
}
