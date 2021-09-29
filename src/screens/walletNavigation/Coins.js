import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import commonStyles from '../../commonStyles';
import {COLORS} from '../../colors';

export default function Coins({navigation, data}) {
  console.log('Data passed', data);

  const tokenOptions = [
    {id: 0, token: 'ONE', balance: 0},
    {id: 1, token: 'BUSD', balance: 0},
    {id: 2, token: 'VIPER', balance: 0},
    {id: 3, token: 'ETH', balance: 0},
  ];

  const tokenCard = ({item}) => {
    return (
      <TouchableOpacity style={styles.tokenCard}>
        <Text style={commonStyles.secondaryTextBlue}>{item.token}</Text>
        <Text style={commonStyles.secondaryText}>{item.balance}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.componentView}>
      <View style={styles.balanceView}>
        <Text style={commonStyles.primaryTextBlue}>
          Balance: {data.oneBalance} ONE
        </Text>
        <Text style={commonStyles.secondaryText}>~ ${data.balance} USD</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={commonStyles.tertiaryText}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tokensListView}>
        <FlatList
          contentContainerStyle={styles.flatListContent}
          data={tokenOptions}
          renderItem={tokenCard}
          numColumns={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  componentView: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.primaryBlack,
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.gradientPrimary,
    borderRadius: 24,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.robinsEggBlue,
  },
  balanceView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '24%',
    marginTop: 4,
    // backgroundColor: '#A6AAE3',
  },
  button: {
    marginTop: 16,
    paddingVertical: 4,
    paddingHorizontal: 24,
    backgroundColor: COLORS.robinsEggBlue,
    borderRadius: 16,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
  },
  tokensListView: {
    width: '100%',
    height: '76%',
    display: 'flex',
    // backgroundColor: '#C9E3A6',
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flatListContent: {
    flexDirection: 'column',
    marginTop: 8,
  },
  tokenCard: {
    height: 100,
    width: 100,
    backgroundColor: COLORS.gradientPrimary,
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
  },
});
