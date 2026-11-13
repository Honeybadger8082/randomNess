import { Image, Linking, Pressable } from 'react-native';
import { Animated } from 'react-native-reanimated';

export default function MainImg({ img, link, style }) {

    const OpenLink = async (link) => {
        await Linking.canOpenURL(link) ?
            Linking.openURL(link) : alert('Failed to Open' + link);
    }

    return (
        <Pressable onPress={() => OpenLink(link)}>
            <Image
                style={style}
                source={{ uri: img }}
            />
        </Pressable>
    );
}