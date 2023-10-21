import * as React from 'react';
import { SafeAreaView, View ,Text,Image} from 'react-native';
import { Button, Menu, Divider, Provider, Card } from 'react-native-paper';
import { styling } from '../styles/styles';

const Component14 =  ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    
    <SafeAreaView style={styling.main}>
    <View style={{alignSelf:'center',}}>
        <Image source={require('../components/physics.png')} style={styling.logo} />
    </View>
            <Provider>
            <View>
              
              <Menu
              style={{position:'absolute'}}
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button mode="contained" onPress={openMenu}>Open Menu</Button>}
              >
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Divider/>
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
              </Menu>
            </View>
          </Provider>
    
    <View style={{ width: 100}}>
                <Button
                    title='Next'
                    mode="contained"
                    buttonColor='blue'
                    style={{ width: 100, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Helper Text')}
                >
                    Next
                </Button>
            </View>

        
    </SafeAreaView>
  );
};

export default Component14;