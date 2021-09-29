import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';
import {COLORS} from '../../colors';

export default function Gift({navigation}) {
  return (
    <View style={commonStyles.subScreenView}>
      <Text style={commonStyles.secondaryTextBlue}>Gift crypto</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
