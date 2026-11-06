import { Image, Linking } from 'react-native';

export default function MainImg({ img, link, style }) {

    const OpenLink = (link) => {
        Linking.canOpenURL(link) ?
            Linking.openURL(link) : alert('Failed to Open' + link);
    }

    return (
        <Pressable onPress={OpenLink(link)}>
            <Image
                style={style}
                source={{ uri: img }}
            />
        </Pressable>
    );
}