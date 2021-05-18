import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const SelectChoiceScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.container}>

            <Image style={styles.wave} source={require('../../assets/top_wave.png')} />

            <View style={{alignItems:'center', top: -145}}>
                <Text style={styles.titleText}>What would you like to do?</Text>
                <Image style={styles.img} source={require('../../assets/select-choice.png')} />
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('Onboarding1')}}>
                    <Text style={styles.loginText}>I need translation help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.loginText}>I can volunteer to translate</Text>
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
        alignItems:'center'
    },
    wave: {
        top: -175
    },
    img: {
        resizeMode: 'contain',
        width: 315,
        height: 281, 
        marginTop: 25
    },
    titleText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
    }, 
    inputLabel: {
        color: '#394248',
        fontSize: 18, 
        width: 330, 
        alignSelf: 'flex-end',
        marginTop: 20
    }, 
    textInput: {
        backgroundColor: '#F4F5FA',
        borderRadius: 10,
        width: 311,
        marginTop: 10,
    },
    loginBtn: {
        backgroundColor: '#4A69D9',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50, 
        width: 300, 
        height: 60,
        marginBottom: 10
    }, 
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    forgotText: {
        color: '#666666',
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 10
    },
    bottom: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 40
    }
});

export default SelectChoiceScreen;