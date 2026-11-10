import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

const GameCard = ({ item }) => {
  return (
    <Pressable
      style={styles.card}
      >                 
      {/* change names to the correlating API name later */}
      <Image source={{  uri: item.thumbnail}} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.developerName}>{item.developer}</Text>
        <Text style={styles.metaText}>
          {item.genre} • {item.platform}
        </Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{item.release_date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#c4c4c4',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    width: 1,
  },
  coverImage: {
    width: '100%',
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#8A6D1F',
    aspectRatio: 1,
    marginVertical: 2,
  },

   descBox: {
    flex: 1,
    backgroundColor: '#E9D9A8',
    borderWidth: 2,
    borderColor: '#5A4310',
    padding: 4,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  developerName: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  scoreContainer: {
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default GameCard;
