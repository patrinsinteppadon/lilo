import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
} from 'react-native';

const InformationScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.container}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('SignUp1')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>

            <Text style={styles.titleText}>wave</Text>

            <Image style={styles.image} source={require('../../assets/info-1.png')} />

            <Text style={styles.receiveText}>Receive or give live translation help</Text>
            <Text style={styles.smallText}>Wave will help match anyone requesting translation help through video call with volunteer translators.</Text>

            <TouchableOpacity style={styles.getStartedBtn} onPress={() => {navigation.navigate('SignUp3')}}>
                <Text style={styles.getStartedText}>Get started</Text>
            </TouchableOpacity>

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
    backArrowContainer: {
        position: 'absolute',
        left: 25,
        top: 45
    },
    backArrow: {
        resizeMode: 'contain', 
        width: 23,
        height: 23,
    },
    titleText: {
        color: '#4A69D9',
        fontSize: 72,
        fontWeight: 'bold',
        marginTop: 45,
    }, 
    image: {
        resizeMode: 'contain',
        width: 200, 
        height: 250,
        marginTop: 20,
    },
    receiveText: {
        color: '#394248',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 237,
        marginTop: 25
    }, 
    smallText: {
        color: '#394248',
        fontSize: 18, 
        textAlign: 'center', 
        width: 300, 
        marginTop: 20
    },
    getStartedBtn: {
        position: 'absolute',
        backgroundColor: '#4A69D9',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50, 
        width: 300, 
        height: 60,
        bottom: 40,
    }, 
    getStartedText: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold'
    }
});

export default InformationScreen;