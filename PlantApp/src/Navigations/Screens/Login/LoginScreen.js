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
      <ImageBackground style={styles.coverImage} source={BackgroundImage}>
        <View style={styles.darkness} />
        <Image source={BucketImage} style={styles.bucketImage} />
        <Text onPress={() => navigation.navigate('Home')} style={styles.topic}>
          Plant Right
        </Text>
        <Text style={styles.subTopic}>your planting assistant</Text>
        <View style={styles.textInput}>
          <CustomInput placeholder="email" />
          <CustomInput placeholder="password" />
        </View>

        <View style={styles.rowText}>
          <Text style={styles.remintMeText}>Remind me</Text>
          <Text style={styles.forgotPWText}>Forgot password</Text>
        </View>

        <CustomButton />
        <View style={styles.rowLogin}>
          <Text style={styles.account}>Allready Have an account?</Text>
          <Text style={styles.login}>Login</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 400,
    position: 'absolute',
  },
  bucketImage: {
    flex: 1,
    width: '60%',
    height: '70%',
    resizeMethod: 'resize',
    position: 'absolute',
    marginTop: 120,
    marginLeft: '18%',
  },
  darkness: {
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    width: '100%',
    height: '100%',
  },
  topic: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '1%',
  },
  subTopic: {
    fontSize: 12,
    // fontWeight:'',
    color: 'white',
    textAlign: 'center',
    marginBottom: '10%',
  },
  textInput: {
    marginTop: '5%',
    color: 'white',
  },
  remintMeText: {
    flex: 1,
    fontSize: 10,
    color: '#f4ffdc',
    marginLeft: ' 14%',
    paddingTop: '2%',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPWText: {
    fontSize: 10,
    color: '#c1d891',
    marginRight: '12%',
    paddingTop: '2%',
  },
  rowLogin: {
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '6%',
  },
  account: {
    flex: 1,
    fontSize: 10,
    color: '#f4ffdc',
    marginLeft: '25%',
    paddingTop: 10,
  },
  login: {
    fontSize: 10,
    color: '#c1d891',
    marginRight: '32%',
    paddingTop: 10,
  },
});
