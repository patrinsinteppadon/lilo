import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Pressable, 
    Modal, 
    Button, // temporary placeholder for dropdowns
} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import Call from './CallScreen.js';
import WaitingRoom from './WaitingRoom.js';

/**
 * TODO: all the things that still need to get done for this component
 * - the font type is "mulish"
 * - include dropdown boxes with language select. 
 *   https://www.npmjs.com/package/react-native-material-dropdown
 */
/**
 * the language select modal. Used in HomeScreen.
 * user indicates the preferred languages of the call here, 
 * before the translator search is initiated.
 * 
 * https://reactnative.dev/docs/modal
 */
const LanguageModal = ({ navigation, modalVisible, setModalVisible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <MaterialCommunityIcons 
                style={{ alignSelf: 'flex-end' }}
                name="close"
                size={30}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <View>
                <Text style={styles.modalHeaderText}>I speak:</Text>
                <Text style={styles.modalText}>You will talk in this language with your translator</Text>
                {/* replace this button w/ dropdown */}
                <Button 
                  style={{ marginBottom: 50 }}
                  title="" 
                  color="gray" 
                />

                <Text style={styles.modalHeaderText}>I need help with:</Text>
                <Text style={styles.modalText}>You will receive translation for this language</Text>
                {/* replace this button w/ dropdown */}
                <Button 
                  style={{ marginBottom: 50 }}
                  title="" 
                  color="gray" 
                />
              </View>
            </View>
            
            {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    // navigation.navigate('Call');
                    // setModalVisible(!modalVisible);
                  }
                }
            >
              <Text style={styles.buttonText}>Request Help Now</Text>
            </Pressable> */}
            <Button 
              title="Request Help Now" 
              color="steelblue"
              onPress={() => {
                navigation.navigate('Call');
                // navigation.navigate('WaitingRoom')
                setModalVisible(!modalVisible);
                }
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width: '100%',
        height: '90%',
        margin: 20,
        marginBottom: 0,
        backgroundColor: "white",
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 35,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        backgroundColor: '#4A69D9',
        width: '100%',
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        color: '#666666',
      },
      modalHeaderText: {
        color: '#394248',
        fontSize: 24,
        marginBottom: 15,
      }
  });

export default LanguageModal;