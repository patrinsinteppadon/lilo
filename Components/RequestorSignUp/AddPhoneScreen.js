import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const AddPhoneScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Onboarding2')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>

            <Image style={styles.logo} source={require('../../assets/phone-num.png')} />
            <Text style={styles.titleText}>Add your number</Text>

            <Text style={styles.inputLabel}>Phone number</Text>
            <View style={styles.phoneInput}>
                <TextInput keyboardType='numeric' style={styles.textInputSmall} />
                <Text style={styles.dashes}>-</Text>
                <TextInput keyboardType='numeric' style={styles.textInputSmall} />
                <Text style={styles.dashes}>-</Text>
                <TextInput keyboardType='numeric' style={styles.textInputLarge} />
            </View>
            
            <TouchableOpacity style={styles.continueBtn} onPress={() => {navigation.navigate('Onboarding4')}}>
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
    phoneInput: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between'
    },
    inputLabel: {
        color: '#394248',
        fontSize: 18, 
        width: 330, 
        alignSelf: 'flex-end',
        marginTop: 25
    }, 
    dashes: {
        color: '#394248',
        fontSize: 40,
        // paddingLeft: 10,
        // paddingRight: 10
    },
    textInputSmall: {
        backgroundColor: '#F4F5FA',
        borderRadius: 10,
        width: 74,
        marginTop: 10,
    },
    textInputLarge: {
        backgroundColor: '#F4F5FA',
        borderRadius: 10,
        width: 95,
        marginTop: 10,
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

export default AddPhoneScreen;