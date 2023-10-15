import * as React from 'react';
import { SafeAreaView, StyleSheet ,View,Image, Text,Button} from 'react-native';
import { Card, SegmentedButtons } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component9 = ({navigation}) => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={styling.main}>
    <View style={{ marginTop: 50, marginBottom: 0 }}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
      </View>
      <Card style={styles.card}>
      <Text style={styles.text}>This is a segmented button</Text>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
        style={styles.segButtons}
      />

      <View style={{ margin: 10 ,width:100, alignSelf:'flex-end',marginTop:50}}>
    <Button
      title='Next'
      mode="contained"
      buttonColor='skyblue'
      style={{ margin: 10, width: 100, alignSelf: 'center' }}
      onPress={() => navigation.navigate('Section List')}
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
    alignItems: 'center',
  },
  card:{
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    height:300,
    width:250,
    padding:10,
    
    flexDirection:'row',
    marginRight:0

  },
  segButtons:{
    alignSelf:'center',
    marginTop:20
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'center'
  }
});

export default Component9;