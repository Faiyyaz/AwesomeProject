/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View, Text, Button, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Modal from 'react-native-modal';

function HomeScreen() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);

  function WrapperComponent() {
    return (
      <View>
        <Modal
          onBackdropPress={() => setIsVisible(false)}
          propagateSwipe={true}
          animationIn="slideInUp"
          animationInTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          useNativeDriver={true}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            zIndex: 0,
          }}
          isVisible={isVisible}>
          <View style={{backgroundColor: 'white', padding: 16}}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
    );
  }

  function BottomSheet() {
    return (
      <View>
        <Modal
          onBackdropPress={() => setIsBottomSheetVisible(false)}
          propagateSwipe={true}
          animationIn="slideInUp"
          animationInTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          useNativeDriver={true}
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 0,
            margin: 0,
            zIndex: 0,
          }}
          isVisible={isBottomSheetVisible}>
          <View
            style={{
              width: Dimensions.get('window').width,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
              height: 200,
            }}>
            <Button title="Open Modal" onPress={() => setIsVisible(true)} />
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Present Bottom Modal"
        onPress={() => setIsBottomSheetVisible(true)}
      />
      <BottomSheet />
      <WrapperComponent />
    </View>
  );
}

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
