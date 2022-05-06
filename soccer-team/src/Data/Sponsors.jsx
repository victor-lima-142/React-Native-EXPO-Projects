import { Image, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'

const Sponsors = [
    {
        id: 1,
        element: <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2021/10/Artboard-5%402x.png' }} style={{ width: 80, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2022/02/VRAU.png' }} style={{ width: 80, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2021/10/Artboard-4%402x.png' }} style={{ width: 80, height: 30 }} />
        </View>,
    },
    {
        id: 2,
        element: <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2020/10/Artboard-7%402x.png' }} style={{ width: 90, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2022/04/mercado.bitcoin.png' }} style={{ width: 90, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2021/10/Artboard-1%402x.png' }} style={{ width: 90, height: 30 }} />
        </View>,
    },
    {
        id: 3,
        element: <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2022/04/metasoccer.png' }} style={{ width: 80, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2021/10/Artboard-6%402x.png' }} style={{ width: 80, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2022/02/cartao.de_.todos_.png' }} style={{ width: 80, height: 30 }} />
        </View>,
    },
    {
        id: 4,
        element: <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-around', width: '80%' }}>
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2021/05/logo2.png' }} style={{ width: 150, height: 30 }} />
            <Image source={{ uri: 'https://static.vasco.com.br/wp-content/uploads/2020/10/Artboard-9%402x-1.png' }} style={{ width: 150, height: 30 }} />
        </View>,
    },

]
export default Sponsors;