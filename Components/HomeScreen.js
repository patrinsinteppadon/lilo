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
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const username = "Bill";
const width = Dimensions.get('window').width;

/**
 * Questions for tiffany
 * 1 - Is there a specific name for these elements?
 *          - the bubble surrounding "2 minutes"
 *              - a label, or a badge
 *          - the hovering action that says "tips to talk to a translator"
 *              - 
 * 
 * TODO: 
 *  - Finish lowfi mockup for home page
 *  - Create Select Language modal.  https://reactnative.dev/docs/modal
 *       - convert modal into a separate component
 *       - figure out how to dim the main screen while modal is active
 *          (maybe set background to black, with transparency. see info340)
 *       - fill out the remainder of the modal, to match the hi-fi
 *  - create empty screen which will house the Call
 *  - Figure out how to use Icons from react-native-elements library
 */
const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16, backgroundColor: '#FFFFFF' }}>
            <ImageBackground source={require('./../assets/wave.png')} style={{position:'absolute', width:width, height:175, resizeMode:'cover', top:0, left:0}}></ImageBackground>
            <View style={styles.header}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.welcomeUsername}>{username}!</Text>
                </View>
                <MaterialCommunityIcons 
                    name="account-circle-outline"
                    size={30}
                    onPress={
                        () => navigation.navigate(
                            'UserStack', { screen: 'User' }
                        )
                    }
                />
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
                    {/* <Button 
                        title="Learn to request translation" 
                        color="#4A69D9" 
                        onPress={() => alert("Showing tips...")}
                    /> */}
                <ImageBackground source={require('./../assets/home_lower.png')} style={{position:'absolute', width:width, height:200, resizeMode:'cover', bottom:0}}>
                    <TouchableOpacity onPress={() => alert("Showing request tutorial...")}>
                        <Text style={styles.learnRequest}>Learn how to request a translation</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* <Image source={require('./../assets/home_lower.png')} style={{position: 'absolute', width:395, height:200,  bottom:0,right:0, resizeMode:'cover'}}/> */}
            

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