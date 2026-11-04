import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import switchPage from '../components/switchPage';

export default function App() {
  return (
    <View style={styles.container}>
      <switchPage linkPath='/otherPage' btnTitle='Change Image'/>
      <Text>I love randomness</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
