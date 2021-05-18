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
const RequestNewCallScreen = () => {
    return (
        <View class="main-page-container" style={styles.container}>
            <TouchableOpacity>
                {/* TODO: CHANGE ICON */}
                <Image style={styles.backArrow} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.close} source={require('../../assets/close_icon.png')} />
            </TouchableOpacity>

            <Text style={styles.headerText}>Would you like to request a new translator now?</Text>
            
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:300}}>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.btnImg} source={require('../../assets/accom-1.png')} />
                        <Text style={styles.text}>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.btnImg} source={require('../../assets/accom-1.png')} />
                        <Text style={styles.text}>No</Text>
                    </TouchableOpacity>
                </View>
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
    btnImg: {
        resizeMode: 'contain', 
        width: 100,
        height: 100,     
    },
    text: {
        color: '#394248',
        fontSize: 14,
        alignSelf: 'center',
        marginTop: 10
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

export default RequestNewCallScreen;