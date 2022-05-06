import { View, Text } from 'react-native'
import Carousel from '../../Components/Carousel';
import News from '../../Data/News'

export default function Home() {
    const carousel = new Carousel(News, true);
    return (
        <>
        <View style={{ alignItems: 'center', backgroundColor: '#212121' }}>
            {carousel.renderCarousel(false, 255, '#000')}
        </View>
        </>
    );
}