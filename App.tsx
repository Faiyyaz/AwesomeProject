/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';

import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {
  CardStyleInterpolators,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput placeholder="Type here" />

      <Button
        title="Present Bottom Modal"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}: HomeScreenProps) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.pop()}>
      <View style={{flex: 1}}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            height: 200,
          }}>
          <Button
            title="Open Modal"
            onPress={() => {
              navigation.goBack();
              setTimeout(() => {
                navigation.push('Details2');
              }, 200); // Adjust delay as needed
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function DetailsScreen2({navigation}: HomeScreenProps) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.pop()}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{backgroundColor: 'white', padding: 16}}>
          <Text>I am the modal content!</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            presentation: 'transparentModal',
            cardStyle: {backgroundColor: 'transparent'},
            cardOverlayEnabled: false,
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen
          name="Details2"
          component={DetailsScreen2}
          options={{
            presentation: 'transparentModal',
            cardStyle: {backgroundColor: 'transparent'},
            cardOverlayEnabled: true,
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
