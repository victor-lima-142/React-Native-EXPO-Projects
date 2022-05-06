import { View, Text } from 'react-native'
import Carousel from '../../Components/Carousel';
import News from '../../Data/News'
import Sponsors from '../../Data/Sponsors';

export default function Home() {
    const news = new Carousel(News, true);
    const sponsors = new Carousel(Sponsors, false)
    return (
        <>
        <View style={{ alignItems: 'center', backgroundColor: '#212121' }}>
            {news.renderCarousel(255, '#000')}
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'transparent', paddingTop: 15 }}>
            <Text style={{ backgroundColor: 'transparent', fontSize: 28, fontWeight: '300', margin: 0}}>Our Sponsors</Text>
            {sponsors.renderCarousel(90, '#000')}
        </View>
        </>
    );
}