import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SwitchPageTwo from '../components/SwitchPageTwo';

export default function App() {
  return (
    <View style={styles.container}>
      <SwitchPageTwo linkPath='/otherPage' btnTitle='Change Image'/>
      <Text>I love randomness</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'colorScheme.lightMain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
