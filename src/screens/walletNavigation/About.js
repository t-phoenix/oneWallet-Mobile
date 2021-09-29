/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import commonStyles from '../../commonStyles';
import {COLORS} from '../../colors';

export default function About({navigation}) {
  const aboutData = [
    {
      key: 'Created On',
      value: '24/8/2021, 16:20:00',
    },
    {key: 'Expires In', value: '10 months, 29 days'},
    {key: 'Spend Limit', value: '1000 ONE/day'},
    {key: 'Wallet Version', value: '12.2'},
    {key: 'Linked Address', value: 'one1pp...6fv'},
  ];

  const dataContainer = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.keyContainer}>
          <Text style={commonStyles.secondaryTextBlue}>{item.key}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={commonStyles.tertiaryTextWhite}>{item.value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={commonStyles.subScreenView}>
      <View style={{height: '70%'}}>
        <FlatList data={aboutData} renderItem={dataContainer} />
      </View>
      <View style={{height: '40%'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle}>Delete locally</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    width: '100%',
  },
  keyContainer: {
    paddingLeft: '4%',
    width: '50%',
    alignItems: 'flex-start',
  },
  valueContainer: {
    width: '50%',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.robinsEggBlue,
    borderRadius: 16,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
  },
});
