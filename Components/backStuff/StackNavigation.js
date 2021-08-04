// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Stack Navigator</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Info"
          onPress={() => navigation.navigate('Summary',{
            itemId: 86,
            itemValue: 'anything you want here',
          })}
        />
      </View>
    );
}

function SummaryScreen({ route, navigation }) {
    let itemId = JSON.stringify(route.params.itemId);
    let itemValue = JSON.stringify(route.params.itemValue);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Summary Screen</Text>
        <Text>ItemId: {itemId}</Text>
        <Text>ItemValue: {itemValue}</Text>
        <Button
          title="Info"
          onPress={() => navigation.push('Info')}
        />
      </View>
    );
}

function InfoScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="First Screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

const Stack = createStackNavigator();

export default function StackApp() {
  return (
      <Stack.Navigator initialRouteName="Info">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
  );
}