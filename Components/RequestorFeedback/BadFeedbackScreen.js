import React, { useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
    ImageBackground, 
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

const BadFeedbackScreen = ({navigation}) => {
    const [isSelected1, setSelected1] = useState(false);
    const [isSelected2, setSelected2] = useState(false);
    const [isSelected3, setSelected3] = useState(false);
    const [isSelected4, setSelected4] = useState(false);
    const [isSelected5, setSelected5] = useState(false);
    const [isSelected6, setSelected6] = useState(false);

    const changeSelected = async(option, changeSet) => {
        let changeValue = option ? false : true
        changeSet(changeValue)
    }

    return (
        <View class="main-page-container" style={styles.container}>
            <ImageBackground style={styles.img} source={require('../../assets/top_wave-3.png')} />
            <TouchableOpacity style={styles.backArrowContainer} onPress={() => {navigation.navigate('Feedback1')}}>
                <Image style={styles.backArrow} source={require('../../assets/back-arrow.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeContainer} onPress={() => {navigation.navigate('Home')}}>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <View style={{top:-300}}>
                <Text style={styles.headerText}>What were your difficulties?</Text>
                
                <View style={{flexDirection:'row', flexWrap:'wrap', width:300}}>
                    <TouchableOpacity style={isSelected1 ? styles.selectedOption : styles.optionContainer} onPress={() => changeSelected(isSelected1, setSelected1)}>
                        <Text style={isSelected1 ? styles.selectedText : styles.optionText}>Couldn't understand translator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected2 ? styles.selectedOption : styles.optionContainer} onPress={() => changeSelected(isSelected2, setSelected2)}>
                        <Text style={isSelected2 ? styles.selectedText : styles.optionText}>Technical difficulties</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected3 ? styles.selectedOption : styles.optionContainer} onPress={() => changeSelected(isSelected3, setSelected3)}>
                        <Text style={isSelected3 ? styles.selectedText : styles.optionText}>Out of time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected4 ? styles.selectedOption : styles.optionContainer} onPress={() => changeSelected(isSelected4, setSelected4)}>
                        <Text style={isSelected4 ? styles.selectedText : styles.optionText}>Unfriendly interaction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected5 ? styles.selectedOption : styles.optionContainer} onPress={() => changeSelected(isSelected5, setSelected5)}>
                        <Text style={isSelected5 ? styles.selectedText : styles.optionText}>Harassment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isSelected6 ? styles.selectedOption : styles.optionContainer} onPress={() => changeSelected(isSelected6, setSelected6)}>
                        <Text style={isSelected6 ? styles.selectedText : styles.optionText}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn} onPress={() => {navigation.navigate('Feedback5')}}>
                    <Text style={styles.nextText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Feedback5')}}>
                    <Text style={styles.skipText}>Skip question</Text>
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
        alignItems:'center', 
        justifyContent: 'center',
    },
    img: {
        width: width * 1.85, 
        height: 600, 
        top: -195, 
        right: -150
    },
    backArrowContainer: {
        position: 'absolute',
        left: 25, 
        top: 45
    },
    backArrow: {
        resizeMode: 'contain', 
        width: 22.5,
        height: 22.5,
    },
    closeContainer: {
        position: 'absolute',
        top: 45, 
        right: 25
    },
    close: {
        resizeMode: 'contain', 
        width: 35,
        height: 35,
    },
    headerText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        width: 300,
        marginBottom: 45
    },
    optionContainer: {
        backgroundColor: '#F4F5FA',
        height: 50, 
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    optionText: {
        color: '#394248',
        fontSize: 14, 
        fontWeight: 'bold', 
        padding: 20
    },
    selectedOption: {
        backgroundColor: '#4A69D9',
        height: 50, 
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    selectedText: {
        color: '#FFF',
        fontSize: 14, 
        fontWeight: 'bold', 
        padding: 20
    },
    text: {
        color: '#666666',
        fontSize: 14,
        marginTop: 25
    },
    bottom: {
        position: 'absolute',
        bottom: 50,
        alignItems: 'center'
    },
    nextBtn: {
        backgroundColor: '#4A69D9',
        borderRadius: 50,
        height: 60, 
        width: 300,
        justifyContent:'center',
        alignItems: 'center', 
        marginTop: 25,
        alignSelf: 'center'
    },
    nextText: {
        color: '#FFF',
        fontSize: 18, 
        fontWeight: 'bold'
    }, 
    skipText: {
        color: '#394248',
        fontSize: 14, 
        marginTop: 10
    }
});

export default BadFeedbackScreen;