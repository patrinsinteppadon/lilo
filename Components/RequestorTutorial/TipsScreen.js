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

const TipsScreen = ({navigation}) => {
    const [show, setShow] = useState(false);

    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Tutorial3')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity> 
            <TouchableOpacity style={styles.closeContainer} onPress={() => {setShow(true)}}>
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

            {show ? 
            (<View style={styles.exitContainer}>
                <Text style={{fontSize:18, color:'#394248'}}>Exit tutorial?</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: 20}}>
                    <TouchableOpacity style={{width:125, alignItems:'center', padding:10}} onPress={() => {setShow(false)}}>
                        <Text style={{fontSize:18, color:'#394248'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.exitBtn} onPress={() => {navigation.navigate('Home')}}>
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
    image: {
        resizeMode: 'contain',
        width: 60, 
        height: 60, 
        marginRight: 20, 
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

export default TipsScreen;