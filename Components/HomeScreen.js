import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const username = "Bill";

const HomeScreen = ({ navigation }) => {
    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16,}}>
            {/* <Text style={styles.titleText}>Wave</Text> */}
            <View style={styles.header}>
                <Text style={styles.welcomeText}>
                    Welcome, {username}!
                </Text>
                    {/* include profile button here */}
                <MaterialCommunityIcons 
                    name="account-circle-outline"
                    size={30}
                    onPress={
                        () => navigation.navigate(
                            'UserStack', { screen: 'User' }
                        )
                    }
                />
            </View>
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
    },
    header: {
        // style the header to mimic the figma
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
  });

export default HomeScreen;