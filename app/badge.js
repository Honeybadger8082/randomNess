import { Text, View, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';

const GameCard = ({ item }) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() => alert(`Launching ${item.title}...`)}>
      <Text style={styles.title}>{item.title}</Text>
      <Image  style={styles.image} />
      <View style={styles.descBox}>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 260,
    alignSelf: 'center',
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#D2AE4F',
    borderWidth: 4,
  },
  title: {
    backgroundColor: '#F4EAD0',
    borderWidth: 2,
    borderColor: '#5A4310',
    padding: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginVertical: 8,
    borderWidth: 3,
    borderColor: '#8A6D1F',
  },
  descBox: {
    flex: 1,
    backgroundColor: '#E9D9A8',
    borderWidth: 2,
    borderColor: '#5A4310',
    padding: 4,
  },
  type: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  desc: {
    flex: 1,
    fontSize: 10,
    marginVertical: 2,
  },
});

export default GameCard;