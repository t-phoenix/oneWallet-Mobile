/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import commonStyles from '../../commonStyles';
import {COLORS} from '../../colors';

export default function Swap({navigation}) {
  const [fromToken, setFromToken] = useState();
  const [swappingAmount, setSwappingAmount] = useState('');
  const [toToken, setToToken] = useState();
  const [gettingAmount, setGettingAmount] = useState('');
  console.log('From Token:', fromToken);
  //TODO: Conversion LOGIC setup for amount inputs
  //To make the list dynamic for Accepting more tokens in the list
  const tokensList = [
    {key: 0, label: 'ONE', value: 'one'},
    {key: 1, label: 'busd', value: 'busd'},
    {key: 2, label: 'ETH', value: 'eth'},
    {key: 3, label: 'VIPER', value: 'viper'},
    {key: 4, label: 'ONEMOON', value: 'onemoon'},
  ];
  //Password variables
  //console.log('tokenlist length:', tokensList.length);
  //SWAP main return
  return (
    <View style={commonStyles.subScreenView}>
      <ScrollView>
        <View style={styles.horizontalFlex}>
          <Text style={commonStyles.primaryTextBlue}>From</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={fromToken}
            onValueChange={(itemValue, itemIndex) => setFromToken(itemValue)}>
            {tokensList.map(item => {
              return (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  color={
                    fromToken === item.value
                      ? COLORS.robinsEggBlue
                      : COLORS.primaryWhite
                  }
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.horizontalFlex}>
          <Text style={commonStyles.primaryTextBlue}>Amount</Text>
          <TextInput
            style={styles.amountInput}
            onChangeText={setSwappingAmount}
            value={swappingAmount}
            placeholder="Enter number"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.horizontalFlex}>
          <Text style={commonStyles.primaryTextBlue}>To</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={toToken}
            onValueChange={(itemValue, itemIndex) => setToToken(itemValue)}>
            {tokensList.map(item => {
              return (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  color={
                    toToken === item.value
                      ? COLORS.robinsEggBlue
                      : COLORS.primaryWhite
                  }
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.horizontalFlex}>
          <Text style={commonStyles.primaryTextBlue}>Amount</Text>
          <TextInput
            style={styles.amountInput}
            onChangeText={setGettingAmount}
            value={gettingAmount}
            placeholder="Enter number"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.horizontalFlex}>
          <TouchableOpacity style={commonStyles.primaryButton}>
            <Text style={commonStyles.tertiaryText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalFlex: {
    paddingVertical: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pickerStyle: {
    height: 180,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  amountInput: {
    height: 40,
    width: 180,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: 16,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.robinsEggBlue,
  },
});
