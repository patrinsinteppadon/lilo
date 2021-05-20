import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
} from 'react-native';

import { RadioButton } from 'react-native-paper';

const SelectLanguageScreen = ({navigation}) => {
    const [checked, setChecked] = useState('english')

    return (
        <View class="main-page-container" style={styles.contianer}>
            <Image style={styles.wave} source={require('../../assets/top_wave.png')} />

            <Image style={styles.image} source={require('../../assets/accom-1.png')} />
            <Text style={styles.selectLangText}>Select app language</Text>
            <Text style={styles.smallText}>This is what you will read the app in. You can select your spoken language for translation later.</Text>

            <View style={styles.languageContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.languageText}>English</Text>
                    <RadioButton
                        value='english'
                        status={checked === 'english' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('english')}
                        color='#4A69D9'
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.languageText}>Espanõl</Text>
                    <RadioButton
                        value='spanish'
                        status={checked === 'spanish' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('spanish')}
                        color='#4A69D9'
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.languageText}>繁体中文</Text>
                    <RadioButton
                        value='chinese'
                        status={checked === 'chinese' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('chinese')}
                        color='#4A69D9'
                    />
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