import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../../commonStyles';
import {COLORS} from '../../colors';

export default function Recovery({navigation}) {
  const recoveryAddress = 'one1qt...Img';

  return (
    <View style={commonStyles.subScreenView}>
      <View style={styles.recoverView}>
        <View>
          <Text style={commonStyles.secondaryTextBlue}>Recovery Address</Text>
          <Text style={commonStyles.tertiaryTextWhite}>{recoveryAddress}</Text>
        </View>
        <View style={styles.iconView}>
          <TouchableOpacity>
            <Icon
              name="copy"
              size={24}
              style={{paddingHorizontal: 4, paddingVertical: 4}}
              color={COLORS.secondaryWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cubes"
              size={24}
              style={{paddingHorizontal: 4, paddingVertical: 4}}
              color={COLORS.secondaryWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={commonStyles.primaryButton}>
          <Text style={commonStyles.tertiaryText}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.primaryButton}>
          <Text style={commonStyles.tertiaryText}>Recover Funds</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  componentView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#00FFFB',
    paddingVertical: 8,
    paddingHorizontal: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  recoverView: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconView: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonView: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
