import React from 'react';
import { Button, View } from 'react-native';


export const DemoScreen =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="HomeScreen"
      />
    </View>
  );
}
