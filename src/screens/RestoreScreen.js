import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import styles and colors
import commonStyles from '../commonStyles';
import {COLORS} from '../colors';

export default function CreateWalletScreen({navigation}) {
  const [recoveringAddress, setRecoveringAddress] = useState('');
  return (
    <View style={commonStyles.pageViewWithPadding}>
      <View style={{marginTop: '8%'}}>
        <Text style={commonStyles.secondaryTextBlue}>
          What is the address of the wallet?
        </Text>
      </View>
      <View style={{height: '4%'}}/>
      <TextInput
        style={commonStyles.inputStyle}
        placeholder="one1..."
        value={recoveringAddress}
        onChangeText={setRecoveringAddress}
      />
      <View style={{height: '4%'}}/>
      <Text style={commonStyles.secondaryText}>OR</Text>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={commonStyles.primaryButton}>
          <Text style={commonStyles.secondaryText}>Scan QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.primaryButton}>
          <Text style={commonStyles.secondaryText}>Upload Document</Text>
        </TouchableOpacity>
      </View>
      <Text style={commonStyles.tertiaryTextWhite}>
        Next, we will ask for your permission to use your phone's camera.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    marginVertical: '8%',
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
