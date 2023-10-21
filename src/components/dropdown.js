import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, SafeAreaView,Image,Button } from 'react-native';
import { Card } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component16 = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
            <Image source={require('../components/physics.png')} style={styling.logo} />
        </View>
    <Card style={{height:200}}>
    <Text style={{fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,}}>Helper Text</Text>
    <View style={styles.container}>
      <Text style={styles.label}>Select Language:</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="English(United States)" value="option1" />
          <Picker.Item label="Spanish" value="option2" />
          <Picker.Item label="Filipino" value="option3" />
          <Picker.Item label="Korean" value="option4" />
          <Picker.Item label="Chinese" value="option5" />
        </Picker>
      </View>
    </View>
    <View style={{ width: 100, alignSelf: 'flex-end', marginTop:30}}>
    <Button
        title='Next'
        mode="contained"
        buttonColor='skyblue'
        style={{ width: 100, alignSelf: 'center' }}
        onPress={() => navigation.navigate('Alert')}
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
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdown: {
    height: 40,
  },
});

export default Component16;