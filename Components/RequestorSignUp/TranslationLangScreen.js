
import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

const TranslationLangScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={styles.contianer}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Onboarding3')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>

            <Image style={styles.logo} source={require('../../assets/language.png')} />

            <View style={{alignItems:'flex-start'}}>
                <Text style={styles.headerText}>I speak:</Text>
                <Text style={styles.text}>You will talk in this language with your translator</Text>

                {/* replace with drop down */}
                <TouchableOpacity style={styles.selectLanguage}>
                <Text style={styles.selectLanguageText}>Select language</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>I need help with:</Text>
                <Text style={styles.text}>You will receive translation for this language</Text>
                
                <TouchableOpacity style={styles.selectLanguage}>
                    <Text style={styles.selectLanguageText}>English</Text>
                </TouchableOpacity>
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
    selectLanguage: {
        backgroundColor: '#F4F5FA',
        borderRadius: 5,
        height: 50,
        width: 300,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    selectLanguageText: {
        color: '#666666',
    },
    text: {
        marginBottom: 15,
        width: 300,
        color: '#666666',
    },
    headerText: {
        color: '#394248',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 30,
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

export default TranslationLangScreen;