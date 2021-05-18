
import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.container}>

            <Image style={styles.wave} source={require('../../assets/top_wave.png')} />

            <Image style={styles.logo} source={require('../../assets/wave.png')} />
            <Text style={styles.titleText}>Log In</Text>

            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.textInput} />
            
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.textInput} />

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot username</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot password</Text>
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
    logo: {
        resizeMode: 'contain', 
        width: 100, 
        height: 100, 
        marginTop: -150
    },
    titleText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
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

export default LoginScreen;