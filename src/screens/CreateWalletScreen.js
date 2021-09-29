import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../commonStyles';
import {COLORS} from '../colors';

export default function CreateWalletScreen({navigation}) {
  const accountName = 'Multiple Catch Rocket';
  const key = 'one1eonwkeni3o34uijd3x3kxkn3x3x3ed';

  const [otp, setOtp] = useState(['-', '-', '-', '-', '-', '-']);
  const [otpVal, setOtpVal] = useState('');
  return (
    <View style={commonStyles.pageView}>
      <LinearGradient
        colors={[COLORS.gradientPrimary, COLORS.gradientSecondary]}
        style={styles.gradientStyling}>
        <View style={styles.headerTextBox}>
          <Text style={commonStyles.primaryTextBlue}>Create Your 1wallet</Text>
          <Text style={commonStyles.tertiaryTextWhite}>
            Google Authenticator to be set manually by using "Enter a setup key"
            feature
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.keyText}>Account:</Text>
          <Text style={styles.valueText}>{accountName}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.keyText}>Key:</Text>
          <Text style={styles.valueText}>{key}</Text>
        </View>
        <View style={styles.passCodeBox}>
          <Text style={commonStyles.tertiaryTextWhite}>
            Copy the 6-digit code from authenticator after setup
          </Text>
          <TextInput
            onChangeText={value => {
              if (isNaN(value)) {
                return;
              }
              if (value.length > 6) {
                return;
              }
              let val = value + '------'.substr(0, 6 - value.length);
              let a = [...val];
              setOtpVal(a);
              setOtp(value);
            }}
            style={{height: 0,fontSize:2}}
            autoFocus={true}
          />
          <View style={styles.otpBoxesContainer}>
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
              <Text style={styles.otpBox} key={index}>
                {otp[item]}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={commonStyles.tertiaryTextBlack}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gradientStyling: {
    height: '100%',
    width: '100%',
    paddingHorizontal: '8%',
    paddingVertical: '4%',
  },
  infoBox: {
    width: '80%',
    paddingHorizontal: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 8,
  },
  keyText: {
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.robinsEggBlue,
  },
  valueText: {
    color: COLORS.secondaryWhite,
  },
  passCodeBox: {
    height: '36%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  otpBoxesContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  otpBox: {
    color: COLORS.secondaryWhite,
    fontWeight: '600',
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#666666',
    height: 45,
    width: 45,
    textAlign: 'center',
    backgroundColor: COLORS.gradientPrimary,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowColor: COLORS.robinsEggBlue,
  },
  buttonContainer: {
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: COLORS.robinsEggBlue,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowColor: COLORS.primaryWhite,
  },
});
