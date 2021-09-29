import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import commonStyles from '../commonStyles';
import {COLORS} from '../colors';

export default function WalletsScreen({navigation}) {
  const [walletCardData] = useState([
    {
      key: 0,
      name: 'Multiply ...',
      oneBalance: '0',
      balance: '0',
      address: 'one1pplckuqd8f3l0tad6z0u7mt476p3w2mf7446fv',
    },
    {
      key: 1,
      name: 'Throw ...',
      oneBalance: '1',
      balance: '10',
      address: 'one1fs49upd2al876g4wz0faznm8sw8594ek4nygu6',
    },
  ]);

  function handleCardPress({props}) {
    console.log(
      'Card Data: ',
      props.key,
      props.name,
      props.oneBalance,
      props.balance,
      props.address,
    );
    navigation.navigate('SingleWallet', props);
  }

  const renderItemComponent = props => {
    return (
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => handleCardPress({props})}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={commonStyles.primaryTextBlue}>{props.name}</Text>
            <Text style={commonStyles.secondaryText}>
              {props.oneBalance} ONE
            </Text>
          </View>
          <View>
            <Text style={commonStyles.secondaryText}>
              {' '}
              ~ $ {props.balance} USD
            </Text>
          </View>
          <View>
            <Text style={commonStyles.smallText}>{props.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyles.pageView}>
      <LinearGradient
        colors={[COLORS.gradientPrimary, COLORS.gradientSecondary]}>
        <View style={styles.totalBalView}>
          <Text style={commonStyles.primaryTextBlue}> Total Balance</Text>
          <View style={styles.actualBalanceView}>
            <Text style={commonStyles.secondaryText}> 0 Harmany</Text>
            <Text style={commonStyles.secondaryText}> $ 0 </Text>
          </View>
        </View>
        <View style={styles.listView}>
          <FlatList
            style={styles.flatListStyle}
            data={walletCardData}
            renderItem={({item}) => renderItemComponent(item)}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListStyle: {
    width: '100%',
    height: '100%',
  },
  totalBalView: {
    width: '94%',
    height: '18%',
    margin: 16,
    paddingVertical: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 24,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
    backgroundColor: COLORS.primaryBlack,
  },
  listView: {
    width: '100%',
    height: '82%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    color: 'white',
  },
  card: {
    width: '90%',
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#2C3036',
    marginTop: 32,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 24,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.robinsEggBlue,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actualBalanceView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '4%',
  },
});
