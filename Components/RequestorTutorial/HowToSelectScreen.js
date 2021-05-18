import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const HowToSelectScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity>
                {/* TODO: CHANGE ICON TO BACK ARROW */}
                <Image style={styles.backArrow} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity> 
            <TouchableOpacity>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.titleText}>How to select languages</Text>
            <Image style={styles.img} source={require('../../assets/select-lang-1.png')} />
            <Text style={styles.text}>Confirm the language you speak and the language you want help translating.</Text>

            {/* TODO: ADD IMAGE HERE */}

            <View style={styles.bottom}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.onScreenCircle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                </View>

                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('Tutorial3')}}>
                    <Image style={styles.nextArrow} source={require('../../assets/ic-arrow-upward-24px.png')} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1, 
        padding: 16, 
        backgroundColor: '#FFFFFF', 
        alignItems:'center'
    },
    backArrow: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: -175,
    },
    close: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: 135,
    },
    titleText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        width: 251,
        marginTop: 45,
    },
    img: {
        resizeMode: 'contain',
        width: 280,
        height: 344,
        marginTop: 10
    },
    text: {
        color: '#394248',
        fontSize: 18,
        textAlign: 'center',
        width: 300,
        marginTop: 25
    },
    bottom: {
        position: 'absolute',
        bottom: 30, 
        width: 325
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        width: 150
    },
    circle: {
        backgroundColor: '#DAE8FE',
        width: 16, 
        height: 16, 
        borderRadius: 50,
    }, 
    onScreenCircle: {
        backgroundColor: '#AFC2F3',
        width: 16, 
        height: 16, 
        borderRadius: 50,
    }, 
    nextBtn: {
        backgroundColor: '#4A69D9',
        borderRadius: 50,
        height: 60, 
        width: 60,
        justifyContent:'center',
        alignItems: 'center', 
        marginTop: 15, 
        alignSelf: 'flex-end'
    },
    nextArrow: {
        resizeMode:'contain',
        width: 25,
        height: 25
    }
});

export default HowToSelectScreen;