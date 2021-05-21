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

const width = Dimensions.get('window').width

const RequestNewCallScreen = ({navigation}) => {
    const [nextScreen, setNextScreen] = useState('Feedback6');

    const changeNextScreen = async (option) => {
        if (option == 'yes') {
            setNextScreen('Call')
        } else {
            setNextScreen('Feedback6')
        }
    }

    return (
        <View class="main-page-container" style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/top_wave-3.png')} />
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Feedback3')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeContainer} onPress={() => {navigation.navigate('Home')}}>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <View style={{top:-300}}>
                <Text style={styles.headerText}>Would you like to request a new translator now?</Text>
                
                <View style={{flexDirection:'row', justifyContent:'space-evenly', width:300}}>
                    <View>
                        <TouchableOpacity onPress={() => changeNextScreen('yes')}>
                            <Image style={styles.btnImg} source={require('../../assets/yes.png')} />
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => changeNextScreen('no')}>
                            <Image style={styles.btnImg} source={require('../../assets/no.png')} />
                            <Text style={styles.text}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate(nextScreen)}}>
                    <Text style={styles.nextText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Feedback6')}}>
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
        top: -235, 
        right: -150
    },
    backArrowContainer: {
        position: 'absolute',
        left: 25, 
        top: 50
    },
    backArrow: {
        resizeMode: 'contain', 
        width: 22.5,
        height: 22.5,
    },
    closeContainer: {
        position: 'absolute',
        top: 45, 
        right: 25
    },
    close: {
        resizeMode: 'contain', 
        width: 35,
        height: 35,
    },
    headerText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        width: 300,
        marginBottom: 45
    },
    btnImg: {
        resizeMode: 'contain', 
        width: 100,
        height: 100,     
    },
    text: {
        color: '#394248',
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 10
    },
    bottom: {
        position: 'absolute',
        bottom: 50,
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

export default RequestNewCallScreen;