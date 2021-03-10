import React, { useState } from 'react';
import LanguageModal from './LanguageModal.js';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    Pressable, 
    Modal, 
    Alert 
} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const username = "Bill";

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
        <View class="main-page-container" style={{ flex: 1, padding: 16 }}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>
                    Welcome, {username}!
                </Text>
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
                <View style={styles.addSpacing}>
                    <Button 
                        title="Request a translator" 
                        color="steelblue" 
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.waitTime}>
                    Wait time:
                </Text>
                <Text style={styles.waitTimeEstimate}>
                    {/* this has a stylized little bubble behind it. so it's probably not a Text component in final product*/}
                    2 minutes
                </Text>
                <Text style={styles.waitTime}>
                    We will match you with the next available translator
                </Text>
            </View>
            <View style={styles.footer}>
                    <Button 
                        title="Tips to talk to a translator" 
                        color="gray" 
                        onPress={() => alert("Showing tips...")}
                    />
            </View>

            {/* language select modal */}
            <LanguageModal
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
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 50,
        marginBottom: 50,
    },
    addSpacing: {
        marginTop: 5,
        marginBottom: 5,
    },
    waitTime: {
        textAlign: 'center',
        color: '#4963D0',
        fontSize: 14,
        marginBottom: 5,
    },
    waitTimeEstimate: {
        textAlign: 'center',
        color: '#4963D0',
        fontSize: 18,
        marginBottom: 10,
    },
    footer: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 180,
        // figure out how to anchor it to the bottom of the window.
        // with a marginBottom of 5 or something
    },
  });

export default HomeScreen;