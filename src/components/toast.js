import Toast from 'react-native-toast-message';
import { Button, SafeAreaView, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import { styling } from '../styles/styles';

export const Component5 = ({ props, navigation }) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  return (
    <SafeAreaView style={styling.main}>
      <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
      <Card style={{ alignContent: 'center', alignContent: 'center' , width:300, alignSelf:'center', }}>
        <View style={{width:200, alignSelf:'center',marginTop:100}}>
          <Button
            title='Show toast'
            color='black'
            onPress={showToast}
          />
        </View>
       
        <View style={{ margin: 10 ,width:100, alignSelf:'flex-end',marginTop:100}}>
          <Button
            title='Next'
            mode="contained"
            buttonColor='skyblue'
            style={{ margin: 10, width: 100, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Elevation')}
          >
            Next
          </Button>
        </View>
      </Card>
    </SafeAreaView>
  )
};

