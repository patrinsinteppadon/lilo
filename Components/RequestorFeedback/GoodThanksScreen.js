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

const GoodThanksScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.container}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Feedback2')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeContainer} onPress={() => {navigation.navigate('Home')}}>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.headerText}>Thanks for using Wave!</Text>
            
            <Image style={styles.img} source={require('../../assets/feedback.png')} />

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.nextText}>Done</Text>
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
        textAlign: 'left', 
        alignSelf: 'flex-start',
        width: 240,
        marginTop: 125,
        marginLeft: 25
    },
    img: {
        resizeMode: 'contain',
        width: 345, 
        height: 346, 
        right: -130,
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
    }
});

export default GoodThanksScreen;