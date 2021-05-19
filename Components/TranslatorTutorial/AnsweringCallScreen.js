import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

const AnsweringCallScreen = ({navigation}) => {
    const [show, setShow] = useState(false);

    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('SignUp4')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity> 
            <TouchableOpacity style={styles.closeContainer} onPress={() => {setShow(true)}}>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.titleText}>Answering a call</Text>
            <Image style={styles.img} source={require('../../assets/t-tutorial-1.png')} />
            <Text style={styles.text}>Wave notifies several volunteers when a requestor makes a call. The first volunteer to pick up is connected.</Text>

            <View style={styles.bottom}>
                <View style={styles.circleContainer}>
                    <View style={styles.onScreenCircle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                </View>

                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('TrTutorial2')}}>
                    <Image style={styles.nextArrow} source={require('../../assets/ic-arrow-upward-24px.png')} />
                </TouchableOpacity>
            </View>

            {show ? 
            (<View style={styles.exitContainer}>
                <Text style={{fontSize:18, color:'#394248'}}>Exit tutorial?</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: 20}}>
                    <TouchableOpacity style={{width:125, alignItems:'center', padding:10}} onPress={() => {setShow(false)}}>
                        <Text style={{fontSize:18, color:'#394248'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.exitBtn} onPress={() => {navigation.navigate('TrHome')}}>
                        <Text style={{fontSize:18, color:'#FFF', fontWeight:'bold'}}>Exit</Text>
                    </TouchableOpacity>
                </View>
            </View>): null}

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
    backArrowContainer: {
        position: 'absolute',
        left: 25, 
        top: 50
    },
    backArrow: {
        resizeMode: 'contain', 
        width: 23,
        height: 23,
    },
    closeContainer: {
        position: 'absolute',
        right: 25, 
        top: 45
    },
    close: {
        resizeMode: 'contain', 
        width: 35,
        height: 35,
    },
    titleText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        width: 251,
        marginTop: 75,
    },
    img: {
        resizeMode: 'contain',
        width: 261,
        height: 280,
        marginTop: 35
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
    },
    exitContainer: {
        position: 'absolute', 
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0, 
        width: width, 
        height: 150, 
        backgroundColor: '#F4F5FA',
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25
    }, 
    exitBtn:{
        backgroundColor: '#4A69D9',
        borderRadius: 50, 
        width: 125, 
        alignItems:'center',
        padding: 10
    }
});

export default AnsweringCallScreen;