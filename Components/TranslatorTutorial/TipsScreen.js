import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image
} from 'react-native';

const TipsScreen = () => {
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
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300}}>
                {/* TODO: CHANGE IMAGE */}
                <Image style={styles.image} source={require('../../assets/accom-1.png')} />
                <Text style={styles.text}>Be in an appropriate environment to chat. It’s okay to pass on the call to someone else if you’re in a busy or loud place.</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300}}>
                {/* TODO: CHANGE IMAGE */}
                <Image style={styles.image} source={require('../../assets/accom-1.png')} />
                <Text style={styles.text}>If you don’t know the translation, don’t worry! The app will offer to connect the requestor with another translator after you end the call. </Text>
            </View>
            
            {/* TODO: ADD IMAGE HERE */}

            <View style={styles.bottom}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.onScreenCircle}></View>
                </View>

                <TouchableOpacity style={styles.nextBtn}>
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
        marginTop: 25
    },
    bottom: {
        position: 'absolute',
        bottom: 50, 
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
        marginTop: 25,
        alignSelf: 'center'
    },
    nextText: {
        color: '#FFF',
        fontSize: 18, 
        fontWeight: 'bold'
    }
});

export default TipsScreen;