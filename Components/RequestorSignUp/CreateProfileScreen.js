import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions
} from 'react-native';

const height = Dimensions.get('window').height

const CreateProfileScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.container}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Onboarding1')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>

            <Image style={styles.logo} source={require('../../assets/profile.png')} />
            <Text style={styles.titleText}>Create your profile</Text>

            <Text style={styles.firstInputLabel}>Username</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput secureTextEntry style={styles.textInput} />
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput secureTextEntry style={styles.textInput} />

            <TouchableOpacity style={styles.continueBtn} onPress={() => {navigation.navigate('Onboarding3')}}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    inputLabel: {
        color: '#394248',
        fontSize: 18, 
        width: 330, 
        alignSelf: 'flex-end',
        marginTop: 10
    }, 
    firstInputLabel: {
        color: '#394248',
        fontSize: 18, 
        width: 330, 
        alignSelf: 'flex-end',
        marginTop: 25
    },
    textInput: {
        backgroundColor: '#F4F5FA',
        borderRadius: 10,
        width: 311,
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
        bottom: 40, 
        top: height - 150
    }, 
    continueText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default CreateProfileScreen;