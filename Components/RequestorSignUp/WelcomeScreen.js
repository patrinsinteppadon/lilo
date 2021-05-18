import React from 'react';
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
const height = Dimensions.get('window').height

const WelcomeScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16, backgroundColor: '#FFFFFF', justifyContent:'center', alignItems:'center' }}>

            <ImageBackground source={require('../../assets/welcome.png')} style={styles.backgroundImg}>
                {/* welcome logo & text */}
                <View style={styles.welcome}>
                    <Image style={styles.logo} source={require('../../assets/wave.png')} />
                    <Text style={styles.helloText}>Hello</Text>
                </View>

                {/* next button */}
                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('SignUp1')}}>
                    <Image style={styles.nextArrow} source={require('../../assets/ic-arrow-upward-24px.png')} />
                </TouchableOpacity>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1, 
        // padding: 16, 
        backgroundColor: '#FFFFFF', 
        justifyContent:'center', 
        alignItems:'center'
    },
    backgroundImg: {
        width: width, 
        height: height,
        flex: 1, 
        padding: 16, 
        backgroundColor: '#FFFFFF', 
        justifyContent:'center', 
        alignItems:'center'
    },
    welcome: {
        alignItems:'center',
    },
    logo: {
        justifyContent:'center',
        resizeMode:'contain',
        width:125,
        height:125
    },
    helloText: {
        color: '#4A69D9',
        fontSize: 72,
        fontWeight: 'bold',
    },
    nextBtn: {
        position: 'absolute',
        backgroundColor: '#4A69D9',
        borderRadius: 50,
        height: 85, 
        width: 85,
        bottom: 50,
        justifyContent:'center',
        alignItems: 'center'
    },
    nextArrow: {
        resizeMode:'contain',
        width: 45,
        height: 45
    }
});

export default WelcomeScreen;