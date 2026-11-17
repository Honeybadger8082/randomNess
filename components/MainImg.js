import { Image, Linking, Pressable } from 'react-native';

export default function MainImg({ img, link, style }) {

    const OpenLink = async (lick) => {
        (await Linking.canOpenURL(lick)) ?
            Linking.openURL(lick) : alert('Failed to Open' + lick);
    }

    return (
        <View
            style={style}
        >
            <Pressable onPress={() => OpenLink(link)}>
                <Image
                    style={style}
                    source={{ uri: img }}
                />
            </Pressable>
        </View>
    );
}