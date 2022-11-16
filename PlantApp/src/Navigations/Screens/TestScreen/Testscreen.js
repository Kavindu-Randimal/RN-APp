import * as React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';

import BackgroundImage from '../../../../assets/images/leaf.jpeg';
import BucketImage from '../../../../assets/images/bucket.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButtons/CustomButton';
// import {ScrollView} from 'react-native-gesture-handler';

export default function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={BucketImage} style={styles.bucketImage} />
      <Text style={styles.text}> Hello </Text>
    </View>
  );
}

// export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    // flexDirection: 'horizontal',
    //     flex: 1,
  },
  bucketImage: {
    // flex: 2,
    width: '20%',
    height: '20%',
    resizeMethod: 'resize',
    position: 'absolute',
    marginRight: '30%',
    marginTop: '10%',
  },
  text: {
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    marginLeft: '10%',
    marginTop: '10%',
  },
});
