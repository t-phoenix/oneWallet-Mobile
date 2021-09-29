/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//Navigation Library Import
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DrawerItems, DrawerNavigation} from 'react-navigation';
//UI component Library
import {StyleSheet, Text} from 'react-native';
//Navigators for Screens Import
import WalletNavigator from './src/navigation/WalletNavigator';
import CreateWalletNavigator from './src/navigation/CreateWalletNavigator';
import RestoreNavigator from './src/navigation/RestoreNavigator';
//import components
import CustomSideBarMenu from './src/components/CustomSideBarMenu';
//importing Other files
import {COLORS} from './src/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: COLORS.robinsEggBlue,
          drawerInactiveTintColor: COLORS.primaryWhite,
        }}
        drawerContent={props => <CustomSideBarMenu {...props} />}>
        <Drawer.Screen
          name="Wallet"
          component={WalletNavigator}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="CreateWallet"
          component={CreateWalletNavigator}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Restore"
          component={RestoreNavigator}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
