import React, { useState } from 'react';
import LanguageModal from './LanguageModal.js';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';

const username = "Bill";
const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16, backgroundColor: '#FFFFFF' }}>
            <ImageBackground source={require('./../assets/home_wave.png')} style={{position:'absolute', width:width, height:200, resizeMode:'cover', top:-10, left:0}}></ImageBackground>
            <View style={styles.header}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.welcomeUsername}>{username}!</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('./../assets/profile_icon.png')} style={{resizeMode:'contain', height:35}} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.requestContainer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.requestTextLight}>Request a <Text style={styles.requestTextBold}>translator</Text></Text>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.requestNow}>Request now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={{width:300, alignItems:'center'}}>
                    <Text style={styles.waitTime}>
                        Estimated wait: <Text style={styles.waitTimeEstimate}>2 min</Text>
                    </Text>
                    <Text style={styles.waitTime}>
                        We will match you with the next available translator
                    </Text>
                </View>
            </View>
            
            <View style={styles.footer}>
                <ImageBackground source={require('./../assets/requestor_art.png')} style={{position:'absolute', height: 250, width: width, resizeMode:'contain', bottom:-50}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Tutorial1')}}>
                        <Text style={styles.learnRequest}>Learn how to request a translation</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* language select modal */}
            <LanguageModal
                navigation={navigation}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        paddingTop: 20,
        textAlign: 'center',
        color:'#FFF'
    },
    welcomeUsername: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#FFF'
    },
    buttonContainer: {
        marginTop: 100,
        marginBottom: 30,
        alignItems: 'center',
    },
    requestContainer: {
        backgroundColor: '#4A69D9',
        borderRadius: 20,
        width: 300,
        padding: 30,
    },
    requestTextLight: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    requestTextBold: {
        fontSize: 44,
        fontWeight: 'bold',
    },
    requestNow: {
        backgroundColor: '#F5F5F5',
        color: '#394248',
        fontWeight: 'bold',
        borderRadius: 20,
        textAlign: 'center',
        height: 40,
        width: 225,
        padding: 10,
        marginTop: 20,
    },
    addSpacing: {
        marginTop: 5,
        marginBottom: 5,
    },
    waitTime: {
        textAlign: 'center',
        // color: '#4963D0',
        color: '#666666',
        fontSize: 14,
        marginBottom: 5,
    },
    waitTimeEstimate: {
        textAlign: 'center',
        // color: '#4963D0',
        color: '#394248',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    learnRequest: {
        color: '#4A69D9',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 0,
    },
    footer: {
        // paddingLeft: 40,
        // paddingRight: 40,
        // marginTop: 50,
        position: 'absolute',
        bottom: 0,
        // figure out how to anchor it to the bottom of the window.
        // with a marginBottom of 5 or something
    },
  });

export default HomeScreen;