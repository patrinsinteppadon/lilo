import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Main extends React.Component {
    render () {
        return (
            <View class="main-page-container">
                <Text style={styles.titleText}>Lilo</Text>
                <Text style={styles.welcomeText}>Welcome, [Username]!</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.addSpacing}>
                        <Button title="Profile" color="steelblue" onPress={this.viewProfile} />
                    </View>
                    <View style={styles.addSpacing}>
                        <Button title="call Translator" color="steelblue" onPress={this.startCall}/>
                    </View>
                </View>
            </View>
        );
    }

    startCall() {
        alert('Starting call...')
    }

    viewProfile() {
        alert('Go to profile...')
    }
}

const styles = StyleSheet.create({
    titleText: {
        color: 'darkblue',
        fontSize: 50,
    },
    welcomeText: {
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    buttonContainer: {
        marginTop: '50px',
    },
    addSpacing: {
        marginTop: '5px',
        marginBottom: '5px',
    }
  });

export default Main;