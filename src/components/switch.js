import * as React from 'react';
import { SafeAreaView ,View,Image, StyleSheet,Text, Button} from 'react-native';
import { Card, Switch } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component8 = ({navigation}) => {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
    <Card style={styles.card}>
    <Text style={styles.text}>This is a Switch</Text>
    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={styles.switch}/>

    <View style={{ margin: 10 ,width:100, alignSelf:'flex-end',marginTop:50}}>
    <Button
      title='Next'
      mode="contained"
      buttonColor='skyblue'
      style={{ margin: 10, width: 100, alignSelf: 'center' }}
      onPress={() => navigation.navigate('Segmented Button')}
    >
      Next
    </Button>
  </View>
    </Card>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  card:{
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    height:200,
    width:200,
    padding:10,
    margin:10,
    flexDirection:'row',

  },
  text:{
    fontSize:25,
    fontWeight:'bold',
  },
  switch:{
    alignSelf:'center',
    marginTop:20,

  }
});

export default Component8;