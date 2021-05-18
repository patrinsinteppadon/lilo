import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const AddNameScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity>
                {/* TODO: CHANGE ICON TO BACK ARROW */}
                <Image style={styles.backArrow} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            {/* TODO: CHANGE IMAGE */}
            <Image style={styles.logo} source={require('../../assets/name.png')} />
            <Text style={styles.titleText}>What's your name?</Text>

            <Text style={styles.inputLabel}>First name</Text>
            <TextInput style={styles.textInput} />

            <TouchableOpacity style={styles.continueBtn} onPress={() => {navigation.navigate('Onboarding2')}}>
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
    backArrow: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: -175,
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
        bottom: 40
    }, 
    continueText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AddNameScreen;