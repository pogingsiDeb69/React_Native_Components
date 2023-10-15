import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component13 = (navigation) => (
    <SafeAreaView style={styling.main}>
        <View style={{ marginTop: 50, marginBottom: 0 }}>
            <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
        <Card style={{ height: 300 }}>
            <Text style={styles.heading}>Activity Indicator</Text>
            <View style={[styles.container, styles.horizontal]}>
                <View>
                    <Text>SMALL BLUE</Text>
                    <ActivityIndicator />
                </View>
                <View>
                    <Text>LARGE BLUE</Text>
                    <ActivityIndicator size="large" />
                </View>
                <View>
                    <Text>SMALL GREEN</Text>
                    <ActivityIndicator size="small" color="#00ff00" />
                </View>
                <View>
                    <Text>LARGE GREEN</Text>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </View>

            <View style={{ width: 100, alignSelf: 'flex-end', marginTop:30}}>
                <Button
                    title='Next'
                    mode="contained"
                    buttonColor='skyblue'
                    style={{ width: 100, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Menu')}
                >
                    Next
                </Button>
            </View>

        </Card>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,

    },
});

export default Component13;