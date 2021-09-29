/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
//importing components
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Navigation Screens Import
import WalletsScreen from '../screens/WalletsScreen';
import ExpandedWalletScreen from '../screens/ExpandedWalletScreen';

//import styles and colors
import commonStyles from '../commonStyles';
import {COLORS} from '../colors';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
export default function WalletNavigator({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallets"
        component={WalletsScreen}
        options={{
          headerTitle: () => (
            <Text style={commonStyles.primaryTextBlue}>Wallet</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="align-center"
                size={30}
                color={COLORS.robinsEggBlue}
                style={{paddingLeft: 16}}
              />
            </TouchableOpacity>
          ),
          headerStyle: commonStyles.headerBarStyle,
        }}
      />
      <Stack.Screen
        name="SingleWallet"
        component={ExpandedWalletScreen}
        options={{
          headerTitle: () => (
            <Text style={commonStyles.primaryTextBlue}>Wallet</Text>
          ),
          headerStyle: commonStyles.headerBarStyle,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
