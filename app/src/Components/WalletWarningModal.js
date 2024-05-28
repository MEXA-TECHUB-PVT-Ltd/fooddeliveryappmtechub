import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, IconButton, Divider, Icon } from 'react-native-paper';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const WalletWarningModal  = ({ visible, onClose, icon, text}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{alignItems: 'center'}} >

          <Icon source={icon} size={wp('30%')} color={COLORS.bgColor} />
          <Text style={styles.heading} >{text}</Text>
          </View>
    
          <PaperBtn containerStyle={styles.closeButton} textStyle={styles.closeButtonText} onPress={onClose} >Ok</PaperBtn>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    // justifyContent: 'center',
    // alignItems : 'center',
    backgroundColor: 'white',
    padding: wp('4%'),
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 10,
    // textAlign: 'center'
  },
  
  closeButton: {
    marginTop: 20,
    // padding: 10,
    backgroundColor: '#FF5722',
    borderRadius: wp('5%'),
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WalletWarningModal;
