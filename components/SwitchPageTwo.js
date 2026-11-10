import { Link } from 'expo-router';
import { StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';


export default function SwitchPage({btnTitle, linkPath}) {
  return (
      <Link href={linkPath} asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{btnTitle}</Text>
        </TouchableOpacity>
      </Link>
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