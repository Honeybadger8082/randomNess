import { useBatteryLevel } from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const level = useBatteryLevel();
  const percent = level >= 0 ? `${Math.round(level * 100)}%` : '--';

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>{percent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
  },
});