import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
} from 'react-native';

const SelectLanguageScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.contianer}>
            <Image style={styles.wave} source={require('../../assets/top_wave.png')} />

            <Image style={styles.image} source={require('../../assets/accom-1.png')} />
            <Text style={styles.selectLangText}>Select app language</Text>
            <Text style={styles.smallText}>This is what you will read the app in. You can select your spoken language for translation later.</Text>

            <View style={styles.languageContainer}>
                <View>
                    <Text style={styles.languageText}>English</Text>
                </View>
                <View>
                    <Text style={styles.languageText}>Espanõl</Text>
                </View>
                <View>
                    <Text style={styles.languageText}>繁体中文</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.continueBtn} onPress={() => {navigation.navigate('SignUp2')}}>
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
    wave: {
        top: -175
    },
    image: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        marginTop: -150
    }, 
    selectLangText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
        marginTop: 20,
    }, 
    smallText: {
        color: '#666666',
        fontSize: 14,
        textAlign: 'center',
        width: 300, 
        marginTop: 20,
    }, 
    languageContainer: {
        backgroundColor: '#F4F5FA',
        borderRadius: 20,
        width: 300, 
        height: 175,
        marginTop: 20,
        padding: 25,
        justifyContent: 'space-between'
    },
    languageText: {
        color: '#394248',
        fontSize: 18
    },
    continueBtn: {
        position: 'absolute',
        backgroundColor: '#4A69D9',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50, 
        width: 300, 
        height: 60,
        bottom: 40,
    }, 
    continueText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default SelectLanguageScreen;