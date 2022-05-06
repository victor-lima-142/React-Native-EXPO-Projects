import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'
let style = {
    width: 270,
    height: 255
}

const News = [
    {
        id: 1,
        title: 'Título da primeira notícia',
        subtitle: 'Subítulo da primeira notícia',
        element: <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2022/04/2022-04-24_01-01-58.jpg'}} style={{ width: '100%', height: 255}} />,
        style: style,
        width: 255,
        height: 255
    },
    {
        id: 2,
        title: 'Título da segunda notícia',
        subtitle: 'Subítulo da segunda notícia',
        element: <Image source={{ uri: 'https://vasconoticias.com.br/wp-content/uploads/2022/05/Vasco-x-Portuguesa-Sub-20-10-600x400-1.jpg'}} style={{ width: '100%', height: 255}} />,
        style: style,
        width: 255,
        height: 255
    },
    {
        id: 3,
        title: 'Título da terceira notícia',
        subtitle: 'Subítulo da terceira notícia',
        element: <Image source={{ uri: 'https://i0.statig.com.br/bancodeimagens/20/r4/fu/20r4fulzv3p2ibzlpzxjq4r3d.jpg'}} style={{ width: '100%', height: 255}} />,
        style: style,
        width: 255,
        height: 255
    },
    {
        id: 4,
        title: 'Título da quarta notícia',
        subtitle: 'Subítulo da quarta notícia',
        element: <Image source={{ uri: 'https://vasconoticias.com.br/wp-content/uploads/2022/05/ze-ricardo-tombense-01.jpg'}} style={{ width: '100%', height: 255}} />,
        style: style,
        width: 255,
        height: 255
    },
    {
        id: 5,
        title: 'Título da quinta notícia',
        subtitle: 'Subítulo da quarta notícia',
        element: <Image source={{ uri: 'https://images.futebolinterior.com.br/2022/05/vasco-vila-nova-serie-b-011.jpg'}} style={{ width: '100%', height: 255}} />,
        style: style,
        width: 255,
        height: 255
    },
    {
        id: 6,
        title: 'Título da quinta notícia',
        subtitle: 'Subítulo da quarta notícia',
        element: <Entypo name="email" size={24} color='white' />,
        style: style,
        width: 255,
        height: 255
    },
]
export default News;