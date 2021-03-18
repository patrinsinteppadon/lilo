import React, { useState } from 'react';
import LanguageModal from './LanguageModal.js';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button, 
} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const username = "Bill";

/**
 * Questions for tiffany
 * 1 - Is there a specific name for these elements?
 *          - the bubble surrounding "2 minutes"
 *              - a label, or a badge
 *          - the hovering action that says "tips to talk to a translator"
 *              - 
 * 
 * Todo: remove bottom navbar (and delete unused screens)
 * 
 * 
 */
const HomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View class="main-page-container" style={{ flex: 1, padding: 16 }}>
			<View style={styles.header}>
				<Text style={styles.welcomeText}>
					Welcome, {username}!
				</Text>
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
							onPress={() => setModalVisible(true)}
						/>
					</View>
				</View>
				<View>
					<Text style={styles.waitTime}>
						Wait time:
					</Text>
					<View style={styles.waitTimeBadge}>
						<Text style={styles.waitTimeEstimate}>
							{/* this has a stylized little bubble behind it. so it's probably not a Text component in final product*/}
							2 minutes
						</Text>
					</View>
					<Text style={styles.waitTime}>
						We will match you with the next available translator
					</Text>
				</View>
				<View style={styles.footer}>
					{/* Still not sure what this action is. It's not a btn */}
					<Button 
						title="Tips to talk to a translator" 
						color="gray" 
						onPress={() => alert("Showing tips...")}
					/>
				</View>

				{/* language select modal */}
				<LanguageModal
					navigation={navigation}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
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
		paddingTop: 20,
		paddingBottom: 20,
		textAlign: 'center'
	},
	buttonContainer: {
		marginTop: 50,
		marginBottom: 50,
	},
	addSpacing: {
		marginTop: 5,
		marginBottom: 5,
	},
	waitTime: {
		textAlign: 'center',
		alignSelf: 'center',
		color: '#4963D0',
		fontSize: 14,
		marginBottom: 5,
		width: '80%',
	},
	waitTimeBadge: {
		alignSelf: 'center',
		width: 'auto',
		paddingHorizontal: 14,
		paddingVertical: 8,
		marginVertical: 7,
		borderRadius: 19.5,
		backgroundColor: '#DAE8FE',
	},
	waitTimeEstimate: {
		textAlign: 'center',
		color: '#4963D0',
		fontSize: 18,
	},
	footer: {
		paddingLeft: 40,
		paddingRight: 40,
		marginTop: 180,
		// figure out how to anchor it to the bottom of the window.
		// with a marginBottom of 5 or something
	},
});

export default HomeScreen;