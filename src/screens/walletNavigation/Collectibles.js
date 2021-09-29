import React from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import {COLORS} from '../../colors';

export default function Collectibles({navigation}) {
  return (
    <View style={commonStyles.subScreenView}>
      <Text style={commonStyles.secondaryTextBlue}>Manage NFT's here</Text>
    </View>
  );
}
