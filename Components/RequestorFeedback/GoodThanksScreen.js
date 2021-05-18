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
    - Add functionality
*/
const GoodThanksScreen = () => {
    return (
        <View class="main-page-container" style={styles.container}>
            <TouchableOpacity>
                {/* TODO: CHANGE ICON */}
                <Image style={styles.backArrow} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.headerText}>Thanks for using Wave!</Text>
            
            <Image style={styles.img} source={require('../../assets/feedback.png')} />

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.nextText}>Done</Text>
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
    },
    backArrow: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: -175,
    },
    close: {
        position: 'absolute',
        resizeMode: 'contain', 
        width: 35,
        height: 35,
        left: 135
    },
    headerText: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold', 
        textAlign: 'left', 
        alignSelf: 'flex-start',
        width: 240,
        marginTop: 125,
        marginLeft: 25
    },
    img: {
        resizeMode: 'contain',
        width: 345, 
        height: 346, 
        right: -130,
    },
    bottom: {
        position: 'absolute',
        bottom: 40,
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
    }
});

export default GoodThanksScreen;