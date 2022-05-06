import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native'

function MenuButton() {
    return <Ionicons name="menu" size={30} color="white" />;
}

function ProfileButton() {
    return <Ionicons name="person-circle-outline" size={30} color="white" />
}

function Logo() {
    return <Image style={{ width: 50, height: 50 }} source={require('./assets/cross.png')} />;
}

const options = {
    headerTitle: () => <Logo />,
    headerRight: () => <ProfileButton />,
    headerLeft: () => <MenuButton />,
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#1b1b1b' },
}

export default options;