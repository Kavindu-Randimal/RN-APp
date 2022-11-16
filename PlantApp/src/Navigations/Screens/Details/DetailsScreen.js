import * as React from 'react';
import {View, Text} from 'react-native';

import CustomInput from '../../../components/CustomInput';

export default function SignInScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Settings Screen
      </Text>
    </View>
  );
}
