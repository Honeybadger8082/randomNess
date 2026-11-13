import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SwitchPage from '../components/SwitchPageTwo';
import MainImg from '../components/MainImg';

export default function App() {
  return (
    <View style={styles.container}>
      <SwitchPage linkPath='/otherPage' btnTitle='Change Image'/>
      <Text>I love randomness</Text>
      <StatusBar style="auto" />
      <MainImg img={'https://card-images.archidekt.com/art/front/8/6/86f54b82-0168-421e-bcde-d13d48b7d9ff.webp'} link={'https://bigrat.monster/'} style={styles.mainImg} />
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
  mainImg: {
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 5,
    height: 400,
    width: 400,
  }
});
