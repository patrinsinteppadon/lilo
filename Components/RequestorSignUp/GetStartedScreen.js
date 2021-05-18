import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

const WelcomeScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.container}>

            <Image style={styles.topImg} source={require('../../assets/top_wave-2.png')} />
            <Image style={styles.img} source={require('../../assets/start-1.png')} />

            <View style={styles.bottom}>
                <Text style={styles.text}>Get started with Wave</Text>
                <TouchableOpacity style={styles.signUpBtn}>
                    <Text style={styles.signUpText} onPress={() => {navigation.navigate('SignUp4')}}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText} onPress={() => {navigation.navigate('SignUp5')}}>Log in</Text>
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
        alignItems:'center'
    },
    topImg: {
        width: width * 1.5,
        height: 500,
        top: -290, 
        right: -85
    },
    img: {
        resizeMode: 'contain',
        width: 390, 
        height: 420, 
        top: -465,
        left: -175
    },
    text: {
        color: '#394248',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        width: 271, 
    }, 
    signUpBtn: {
        backgroundColor: '#4A69D9',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50, 
        width: 300, 
        height: 60,
        marginTop: 25
    }, 
    signUpText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    loginText: {
        color: '#666666',
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 15
    },
    bottom: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 40
    }
});

export default WelcomeScreen;