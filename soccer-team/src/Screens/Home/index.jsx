import CarouselTemplate from "../../Components/Carousel";
import { View, Text, FlatList, Image } from 'react-native'
import Store from "../../Parts/Store";
import News from './News'

export default function Home() {
    return (
        <View style={{ alignItems: 'center', backgroundColor: '#212121' }}>
            {CarouselTemplate(News, false)}
        </View>
    );
}