import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
//importing components
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//importing Screens
import CreateWalletScreen from '../screens/CreateWalletScreen';

//import styles and colors
import commonStyles from '../commonStyles';
import {COLORS} from '../colors';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function CreateWalletNavigator({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateWalletScreen"
        component={CreateWalletScreen}
        options={{
          headerTitle: () => (
            <Text style={commonStyles.primaryTextBlue}>Create Wallet</Text>
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
    </Stack.Navigator>
  );
}
