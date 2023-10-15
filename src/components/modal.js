import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native';
import {styling} from '../styles/styles'
import { Button, Card } from 'react-native-paper';

export const Component4 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styling.main}>
    <View style={{marginTop:50, marginBottom:0}}>
    <Image source={require('../components/physics.png')} style={styling.logo}/>
    </View>
    <View style={{alignSelf:'center',marginRight:120,marginTop:0}}>
    <Pressable
    style={[styles.button, styles.buttonOpen]}
    onPress={() => setModalVisible(true)}>
    <Text style={styles.textStyle}>Show Modal</Text>
  </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
    <Card style={{marginBottom:500, alignSelf:'right', marginLeft:280}}>
    <View>
        <Button
        mode="contained"
        buttonColor='skyblue'
        style={{ margin: 10, width:100, alignSelf:'center'}}
        onPress={() => navigation.navigate('Toast')}
        >
        Next
        </Button>
    </View>
    </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation:5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    position:'absolute'
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

