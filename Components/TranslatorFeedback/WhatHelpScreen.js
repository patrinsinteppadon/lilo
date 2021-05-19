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

const WhatHelpScreen = ({navigation}) => {

    return (
        <View class="main-page-container" style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/top_wave-3.png')} />

            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('TrFeedback1')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeContainer} onPress={() => {navigation.navigate('TrHome')}}>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <View style={{alignItems:'center', top: -300}}>
                <Text style={styles.headerText}>What did you help translate with?</Text>
                <Text style={styles.text}>This will help us improve future matches.</Text>

                <View style={styles.choicesContainer}>
                    <View>
                        <Text style={styles.choiceText}>Reading text</Text>
                    </View>
                    <View>
                        <Text style={styles.choiceText}>Interpreting conversation</Text>
                    </View>
                    <View>
                        <Text style={styles.choiceText}>Navigating and transportation</Text>
                    </View>
                    <View>
                        <Text style={styles.choiceText}>Identifying product(s)</Text>
                    </View>
                    <View>
                        <Text style={styles.choiceText}>Other</Text>
                    </View>
                </View>
            </View>
        
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('Feedback4')}}>
                    <Text style={styles.nextText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
        top: -165, 
        right: -150
    },
    backArrowContainer: {
        position: 'absolute',
        left: 25, 
        top: 45
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
    },
    text: {
        color: '#666666',
        fontSize: 14,
        marginTop: 5
    },
    choicesContainer: {
        backgroundColor: '#F4F5FA',
        borderRadius: 20,
        width: 311, 
        height: 312,
        marginTop: 20,
        padding: 25,
        justifyContent: 'space-between'
    },
    choiceText: {
        color: '#394248',
        fontSize: 18
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
    }, 
    skipText: {
        color: '#394248',
        fontSize: 14, 
        marginTop: 10
    }
});

export default WhatHelpScreen;