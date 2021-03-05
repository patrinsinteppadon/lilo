import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16,}}>
            <Text style={styles.titleText}>Lilo</Text>
            <Text style={styles.welcomeText}>Welcome, [Username]!</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.addSpacing}>
                    <Button 
                        title="Request a translator" 
                        color="steelblue" 
                        onPress={() => alert("Showing languages modal...")}
                    />
                </View>
                <View style={styles.addSpacing}>
                    <Button 
                        title="Profile" 
                        color="steelblue" 
                        onPress={
                            () => navigation.navigate(
                                'UserStack', { screen: 'User' }
                            )} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        color: 'darkblue',
        fontSize: 50,
        textAlign: 'center'
    },
    welcomeText: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 50,
    },
    addSpacing: {
        marginTop: 5,
        marginBottom: 5,
    }
  });

export default HomeScreen;