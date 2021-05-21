import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,  
    Modal, 
    Button, // temporary placeholder for dropdowns
    TouchableOpacity,
    Image
} from 'react-native';

// icons
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

// drop down
import DropDownPicker from 'react-native-dropdown-picker';

import Call from './CallScreen.js';

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'english'},
    {label: 'Spanish', value: 'spanish'},
    {label: 'Mandarin Chinese', value: 'mandarin'},
    {label: 'Cantonese Chinese', value: 'cantonese'},
  ]);

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
              {/* <MaterialCommunityIcons 
                style={{ alignSelf: 'flex-end' }}
                name="close"
                size={30}
                onPress={() => setModalVisible(!modalVisible)}
              /> */}
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image source={require('./../assets/close_icon.png')} style={styles.closeIcon} />
              </TouchableOpacity>
              <View>
                <Text style={styles.modalHeaderText}>I speak:</Text>
                <Text style={styles.modalText}>You will talk in this language with your translator</Text>

                {/* replace with drop down */}
                <TouchableOpacity style={styles.selectLanguage}>
                  <Text style={styles.selectLanguageText}>Mandarin Chinese</Text>
                </TouchableOpacity>

                <Text style={styles.modalHeaderText}>I need help with:</Text>
                <Text style={styles.modalText}>You will receive translation for this language</Text>
                {/* replace this button w/ dropdown */}
                {/* <Button 
                  style={{ marginBottom: 50 }}
                  title="" 
                  color="gray" 
                /> */}
                <TouchableOpacity style={styles.selectLanguage}>
                  <Text style={styles.selectLanguageText}>English</Text>
                </TouchableOpacity>
              </View>
            </View>
        
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.requestContainer} onPress={() => {
                navigation.navigate('Call');
                setModalVisible(!modalVisible);
              }}>
                <Text style={styles.requestText}>Request now</Text>
              </TouchableOpacity>
            </View>
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
      closeIcon: {
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        height: 35,
      },  
      selectLanguage: {
        backgroundColor: '#F4F5FA',
        borderRadius: 5,
        height: 50,
        paddingLeft: 10,
        justifyContent: 'center',
      },
      selectLanguageText: {
        color: '#666666',
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
      requestContainer: {
        backgroundColor: '#4A69D9',
        borderRadius: 50,
        height: 50,
        width: 300,
        justifyContent: 'center',
      },
      requestText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      modalText: {
        marginBottom: 15,
        color: '#666666',
      },
      modalHeaderText: {
        color: '#394248',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 30,
      }
  });

export default LanguageModal;