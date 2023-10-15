import React, { useState } from 'react';
import { View, Button, StyleSheet,Image, SafeAreaView } from 'react-native';
import { Checkbox, Text, Provider, Card } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component18 = (navigation) => {
  const [checked, setChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setChecked(!checked);
  };

  return (

    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
            <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
    <Card style={{height:200}}>
    <Text style={{fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,}}>Checkbox</Text>
        <Provider>
      <View style={styles.container}>
        <Checkbox.Android
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleToggleCheckbox}
        />
        <Text>Checkbox Example</Text>
      </View>
    </Provider>
    <View style={{ width: 100, alignSelf: 'flex-end', marginTop:30}}>
    <Button
        title='Next'
        mode="contained"
        buttonColor='skyblue'
        style={{ width: 100, alignSelf: 'center' }}
        onPress={() => navigation.navigate('Divider')}
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

export default Component18;
