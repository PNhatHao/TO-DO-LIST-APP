import * as React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go to home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go to firts screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});