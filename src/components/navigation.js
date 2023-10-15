import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Wew} from './frame';
import Component1, { Componen1 } from './searchbar';
import {theme} from './App.styles';
import {Component2} from '../styles/home'
import { Component3 } from './pressable';
import { Component4 } from './modal';
import { Component5 } from './toast';
import { Component6 } from './flatlist';
import Component7 from './elevation';
import Component8 from './switch';
import Component9 from './segmentedButton';
import Component10 from './sectionList';
import Component11 from './scrollview';
import Component12 from './progressBar';
import Component13 from './activityIndicator';
import Component14 from './menu';
import Component15 from './helperText';
import Component16 from './dropdown';
import Component17 from './alert';
import Component18 from './checkbox';
import Component19 from './divider';




  
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  
    return {
      theme
    };
  };
  
    const Stack = createStackNavigator();
  
  function MyStacks() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Wew}
          options={{
            headerTitle:"",
            headerTransparent:'transparent',
          }}
        />
        <Stack.Screen
          name="Flatlist"
          component={ Component6 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="SearchBar"
          component={Component1}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Accordion Items"
          component={ Component2 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Pressable"
          component={ Component3 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Modal"
          component={ Component4 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Toast"
          component={ Component5 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Elevation"
          component={ Component7 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Switch"
          component={ Component8 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Segmented Button"
          component={ Component9 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Section List"
          component={ Component10 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Scroll View"
          component={ Component11 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Progress Bar"
          component={ Component12 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Activity Indicator"
          component={ Component13 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Menu"
          component={ Component14 }
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Helper Text"
          component={ Component15}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Dropdown"
          component={ Component16}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Alert"
          component={ Component17}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Checkbox"
          component={ Component18}
          options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Divider"
          component={ Component19}
          options={{ headerStyleInterpolator: forFade }}
        />

        
        
      </Stack.Navigator>
    );
  }
export const MyStack = () => {
  return (
    <MyStacks/>
  );
};

