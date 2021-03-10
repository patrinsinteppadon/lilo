import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Pressable, 
    Modal, 
    Alert 
} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

// todo: font type is "mulish"
/**
 * the language select modal. Used in HomeScreen.
 * user indicates the preferred languages of the call here, 
 * before the translator search is initiated.
 * 
 * https://reactnative.dev/docs/modal
 */
const LanguageModal = ({ modalVisible, setModalVisible }) => {
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
            <MaterialCommunityIcons 
              style={{ alignSelf: 'flex-end' }}
              name="close"
              size={30}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <View>
              <Text style={styles.modalHeaderText}>I speak:</Text>
              <Text style={styles.modalText}>You will talk in this language with your translator</Text>
              {/* include dropdown box here */}
              <Text style={styles.modalHeaderText}>I need help with:</Text>
              <Text style={styles.modalText}>You will receive translation for this language</Text>
              {/* include dropdown box here */}
            </View>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => alert('Finding a translator..')}
              >
              <Text style={styles.buttonText}>
                Request Help Now</Text>
            </Pressable>
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
        // alignItems: "center", hopefully this isnt needed
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
        marginTop: 200, // instead of this, anchor btn to bottom of screen
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