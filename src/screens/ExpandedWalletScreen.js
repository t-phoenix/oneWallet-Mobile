import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//importing subNavigation Screens
import Coins from './walletNavigation/Coins';
import Collectibles from './walletNavigation/Collectibles';
import About from './walletNavigation/About';
import Recovery from './walletNavigation/Recovery';
import Swap from './walletNavigation/Swap';
import Gift from './walletNavigation/Gift';

//importing styles
import commonStyles from '../commonStyles';
import {COLORS} from '../colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExpandedWalletScreen({navigation, route}) {
  //props passed in Screen Component
  const staticData = route.params;
  //Navigation Variables
  const [navSelected, setNavSelected] = useState({id: 0, option: 'Coins'});
  const walletNavOptions = [
    {id: 0, option: 'Coins'},
    {id: 1, option: 'Collectibles'},
    {id: 2, option: 'About'},
    {id: 3, option: 'Recovery'},
    {id: 4, option: 'Swap'},
    {id: 5, option: 'Gift'},
  ];

  function handleNavButtonPress(item) {
    console.log('pressed item:', item);
    setNavSelected(item);
  }

  const renderNavButton = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleNavButtonPress(item)}
        style={
          item.id === navSelected.id
            ? styles.navButtonSelected
            : styles.navButtonNOTSelected
        }>
        <Text
          style={
            item.id === navSelected.id
              ? commonStyles.tertiaryText
              : commonStyles.tertiaryTextWhite
          }>
          {item.option}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyles.pageViewWithPadding}>
      {/* Header and Nav */}

      <View style={styles.headerCard}>
        <View style={styles.innerView1}>
          <Text style={commonStyles.primaryTextBlue}>{staticData.name}</Text>
          <Text style={commonStyles.smallText}>{staticData.address}</Text>
        </View>
        <View style={styles.innerView2}>
          <Icon name="qrcode" size={36} color={COLORS.secondaryWhite} />
          <Icon name="camera" size={28} color={COLORS.secondaryWhite} />
        </View>
      </View>
      <View style={styles.navigationBar}>
        <FlatList
          style={styles.flatListConfig}
          data={walletNavOptions}
          renderItem={renderNavButton}
          horizontal={true}
        />
      </View>

      {/* Wallet Container */}
      <View style={styles.bodyView}>
        {(() => {
          if (navSelected.id === 0) {
            return <Coins navigation={navigation} data={staticData} />;
          }
          if (navSelected.id === 1) {
            return <Collectibles />;
          }
          if (navSelected.id === 2) {
            return <About />;
          }
          if (navSelected.id === 3) {
            return <Recovery />;
          }
          if (navSelected.id === 4) {
            return <Swap />;
          } else {
            return <Gift />;
          }
        })()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerCard: {
    width: '100%',
    marginTop: '4%',
    height: '16%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 24,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
    backgroundColor: COLORS.primaryBlack,
  },
  navigationBar: {
    width: '100%',
    height: '8%',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '0%',
    paddingLeft: '0%',
    marginTop: '2%',
    borderRadius: 16,
  },
  innerView1: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: '6%',
  },
  innerView2: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  flatListConfig: {height: '100%', width: '100%'},
  navButtonSelected: {
    marginVertical: 14,
    marginHorizontal: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: COLORS.robinsEggBlue,
    borderRadius: 18,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
  },
  navButtonNOTSelected: {
    marginVertical: 14,
    marginHorizontal: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlack,
    borderRadius: 18,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.robinsEggBlue,
  },
  //Body Styling
  bodyView: {
    width: '100%',
    height: '70%',
  },
});
