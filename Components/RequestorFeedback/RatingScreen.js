import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
    ImageBackground, 
    Dimensions
} from 'react-native';

import { AirbnbRating } from 'react-native-ratings';

const width = Dimensions.get('window').width

const RatingScreen = ({navigation}) => {
    const [rating, setRating] = useState(0);
    const [nextScreen, setScreenPath] = useState('Feedback3');

    const ratingComplete = (rating) => {
        setRating(rating)
        if (rating >= 4) {
            setScreenPath('Feedback2')
        }
    }

    return (
        <View class="main-page-container" style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/top_wave-3.png')} />

            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <View style={{alignItems:'center', top: -300}}>
                <Text style={styles.headerText}>Rate your experience with your translator</Text>
                <Text style={styles.text}>Your translator won't see this</Text>

                <AirbnbRating
                    reviews=''
                    defaultRating={0}
                    selectedColor='#4A69D9'
                    onFinishRating={ratingComplete}
                />
            </View>
        
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate(nextScreen)}}>
                    <Text style={styles.nextText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.skipText}>Skip question</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16, 
        backgroundColor: '#FFFFFF', 
        alignItems:'center', 
        justifyContent: 'center',
    },
    img: {
        width: width * 1.85, 
        height: 600, 
        top: -250, 
        right: -150
    },
    close: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: 135,
        top: -500
    },
    headerText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        width: 300,
    },
    text: {
        color: '#666666',
        fontSize: 14,
        marginTop: 25
    },
    bottom: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center'
    },
    nextBtn: {
        backgroundColor: '#4A69D9',
        borderRadius: 50,
        height: 60, 
        width: 300,
        justifyContent:'center',
        alignItems: 'center', 
        marginTop: 25,
        alignSelf: 'center'
    },
    nextText: {
        color: '#FFF',
        fontSize: 18, 
        fontWeight: 'bold'
    }, 
    skipText: {
        color: '#394248',
        fontSize: 14, 
        marginTop: 10
    }
});

export default RatingScreen;