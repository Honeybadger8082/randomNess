import { Link } from 'expo-router';
import { StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../app/index';
import otherPage from '../app/otherPage';


const RootStack = createNativeStackNavigator({
  initialRouteName: linkPath,
  screens: {
    Home: index,
    Other: otherPage
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function SwitchPage({linkPath}) {
  return (
      initialRouteName = linkPath,
      <Navigation />
  );
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'colorScheme.main' ,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: '',
    borderRadius: 8,
  },
  btnText: {
    color: 'colorScheme.lightText.text',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});