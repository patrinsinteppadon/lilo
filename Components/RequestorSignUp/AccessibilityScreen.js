import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
    Switch
} from 'react-native';

const AccessibilityScreen = ({navigation}) => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Onboardgin4')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>

            <Image style={styles.logo} source={require('../../assets/profile.png')} />
            <Text style={styles.titleText}>Accessibility</Text>

            <Text style={styles.headerText}>In-app</Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', alignSelf: 'flex-start', marginLeft: 25}}>
                <Text style={styles.text}>Text size</Text>
                <Image style={styles.vector} source={require('../../assets/Vector.png')} />
            </View>
            <View style={{flexDirection:'row', alignSelf: 'flex-start', marginLeft: 25}}>
                <Text style={styles.text}>Increase contrast</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#4A69D9" }}
                    thumbColor={isEnabled1 ? "#FFFF" : "#FFFF"}
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                    style={styles.toggle}
                />
            </View>

            <Text style={styles.headerText}>Calling accomodations</Text>
            <Text style={styles.smallText}>Your translator will be notified of your needs</Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', alignSelf: 'flex-start', marginLeft: 25}}>
                <Text style={styles.text}>Hearing impaired</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#4A69D9" }}
                    thumbColor={isEnabled2 ? "#FFFF" : "#FFFF"}
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                    style={styles.toggle}
                />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', alignSelf: 'flex-start', marginLeft: 25}}>
                <Text style={styles.text}>Visually impaired</Text>
                <Switch 
                    trackColor={{ false: "#767577", true: "#4A69D9" }}
                    thumbColor={isEnabled3 ? "#FFFF" : "#FFFF"}
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                    style={styles.toggle}
                />
            </View>

            <TouchableOpacity style={styles.continueBtn} onPress={() => {navigation.navigate('Tutorial1')}}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>

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
        top: 45
    },
    backArrow: {
        resizeMode: 'contain', 
        width: 23,
        height: 23,
    },
    logo: {
        resizeMode: 'contain', 
        width: 100, 
        height: 100, 
        marginTop: 40
    },
    titleText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        width: 251,
        marginTop: 20,
    },
    headerText: {
        color: '#394248',
        fontSize: 24, 
        fontWeight: 'bold', 
        alignSelf: 'flex-start',
        marginLeft: 25, 
        marginTop: 30
    },
    text: {
        color: '#394248',
        fontSize: 18,
        marginTop: 25,
        marginRight: 125
    },
    vector: {
        resizeMode: 'contain',
        width: 15, 
        height: 15, 
        marginTop: 30,
        marginLeft: 85
    },
    toggle: {
        marginTop: 25
    },
    smallText: {
        color: '#666666',
        fontSize: 14,
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 5
    },
    continueBtn: {
        backgroundColor: '#4A69D9',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50, 
        width: 300, 
        height: 60,
        marginTop: 25,
        position: 'absolute',
        alignItems: 'center',
        bottom: 40
    }, 
    continueText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AccessibilityScreen;