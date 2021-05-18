import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

/*
TODO: 
    - Change current back arrow function
    - Remove hardcoded feedback options
    - Add functionality
*/
const BadFeedbackScreen = () => {
    return (
        <View class="main-page-container" style={styles.container}>
            <TouchableOpacity>
                {/* TODO: CHANGE ICON */}
                <Image style={styles.backArrow} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.headerText}>What were your difficulties?</Text>
            
            <View style={{flexDirection:'row', flexWrap:'wrap', width:300}}>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Couldn't understand translator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Technical difficulties</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Out of time</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Unfriendly interaction</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Harassment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Other</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.nextText}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
    backArrow: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: -175,
        top: -155

    },
    close: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: 135,
        top: -155
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