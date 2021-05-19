import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';

const langToTranslate = "Spanish"
const width = Dimensions.get('window').width;

const AcceptCallScreen = ({navigation}) => {
    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16, backgroundColor: '#AFC2F3' }}>
            <Text style={styles.boldText}>Someone needs translation help translating from English to {langToTranslate}...</Text>
            <View style={styles.footer}>
                <View style={{alignItems:'center', marginLeft:35, marginRight:35}}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.navigate('TrHome')}>
                        <Image source={require('../../assets/end.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pass on to next volunteer</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('TrFeedback1')}>
                        <Image style={{transform: [{ rotate: '-135deg' }]}} source={require('../../assets/end.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Accept call</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        color: '#FFF',
        fontSize: 32, 
        fontWeight: 'bold',
        width: 300
    }, 
    footer: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    }, 
    acceptBtn: {
        backgroundColor: '#4A69D9',
        width: 100, 
        height: 100,
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelBtn: {
        backgroundColor: '#FF7575',
        width: 100, 
        height: 100,
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        width: 140,
        textAlign: 'center', 
        marginTop:10
    }
});

export default AcceptCallScreen;