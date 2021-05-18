import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const TipsScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity>
                {/* TODO: CHANGE ICON TO BACK ARROW */}
                <Image style={styles.backArrow} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity> 
            <TouchableOpacity>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.titleText}>General tips</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300, marginTop:35}}>
                <Image style={styles.image} source={require('../../assets/tips-1.png')} />
                <Text style={styles.text}>Should you need more help, we’ll prompt you after the call to quickly request the next available translator.</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300, marginTop:35}}>
                <Image style={styles.image} source={require('../../assets/tips-2.png')} />
                <Text style={styles.text}>Translators are rated after each call. We take your feedback very seriously to maintain a friendly environment.</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300, marginTop:35}}>
                <Image style={styles.image} source={require('../../assets/tips-3.png')} />
                <Text style={styles.text}>Only share what you’re comfortable with. We won’t share your name or contact info with your translator.</Text>
            </View>

            <View style={styles.bottom}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.onScreenCircle}></View>
                </View>

                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.nextText}>I'm ready!</Text>
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
    image: {
        resizeMode: 'contain',
        width: 60, 
        height: 60, 
        marginRight: 20, 
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
    text: {
        color: '#394248',
        fontSize: 18,
        textAlign: 'left',
        width: 213,
        // marginTop: 25
    },
    bottom: {
        position: 'absolute',
        bottom: 40, 
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
        width: 300,
        justifyContent:'center',
        alignItems: 'center', 
        marginTop: 35,
        alignSelf: 'center'
    },
    nextText: {
        color: '#FFF',
        fontSize: 18, 
        fontWeight: 'bold'
    }
});

export default TipsScreen;