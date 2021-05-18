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

const username = "Alexandra";
const width = Dimensions.get('window').width;

const HomeScreen = () => {
    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16, backgroundColor: '#FFFFFF' }}>
            <ImageBackground source={require('./../assets/home_wave.png')} style={{position:'absolute', width:width, height:200, resizeMode:'cover', top:-10, left:0}}></ImageBackground>
            <View style={styles.header}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.welcomeUsername}>{username}!</Text>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('UserStack', { screen: 'User' })}>
                    <Image source={require('./../assets/profile_icon.png')} style={{resizeMode:'contain', height:35}} />
                </TouchableOpacity>
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:100}}>
                <Text style={styles.sectionTitle}>Your impact</Text>
                <View style={styles.infoContainer}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.text}>Translated</Text>
                        <Text style={styles.infoTextBold}>15</Text>
                        <Text style={styles.text}>calls</Text>
                    </View>
                    <View style={styles.verticalDivider}></View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.text}>Volunteer for</Text>
                        <Text style={styles.infoTextBold}>6</Text>
                        <Text style={styles.text}>months</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Receiving requests</Text>
                <Text style={styles.text, styles.requestText}>When someone requests translation help, you’ll receive a notification.</Text>

                <TouchableOpacity style={styles.learnButton}>
                    <Text style={styles.learnText}>Learn how to accept a call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        paddingTop: 20,
        textAlign: 'center',
        color:'#FFF', 
    },
    welcomeUsername: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#FFF'
    },
    sectionTitle: {
        color: '#000000',
        fontSize: 24, 
        fontWeight: 'bold', 
        alignSelf: 'flex-start',
        marginLeft: 25
    },  
    text: {
        color: '#666666',
        fontSize: 14
    },
    infoContainer: {
        flexDirection: 'row',
        backgroundColor: '#F4F5FA',
        justifyContent: 'space-around',
        borderRadius: 20,
        width: 311, 
        padding: 20, 
        marginTop: 25, 
        marginBottom: 25
    },
    infoTextBold: {
        color: '#4A69D9',
        fontSize: 32, 
        fontWeight: 'bold',
    },
    verticalDivider: {
        backgroundColor: '#DFE1EC',
        height: 86, 
        width: 2
    },
    requestText: {
        color: '#666666',
        fontSize: 14,
        alignSelf: 'flex-start',
        width: 300, 
        marginTop: 15,
        marginLeft: 25, 
    },
    learnButton: {
        backgroundColor: '#4A69D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 311, 
        height: 50, 
        marginTop: 25
    },
    learnText: {
        color: '#FFF',
        fontSize: 18, 
        fontWeight: 'bold'
    }
  });

export default HomeScreen;