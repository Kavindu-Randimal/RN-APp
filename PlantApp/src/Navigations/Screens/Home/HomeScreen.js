import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Pressable,
  onPress,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import {ListItem} from 'react-native-elements';
import {List} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import {ListItem, Avatar} from '@react-native-material/core';
import BucketImage from '../../../../assets/images/bucket.png';

import BackgroundImage from '../../../../assets/images/leaf.jpeg';
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.coverImage} source={BackgroundImage}>
        <View style={styles.darkness} />
        <Text style={styles.topic}>Let's Heal The World</Text>
        <Text style={styles.subTopic}>
          Enter your Planting Details and Earn Some Points
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Add Plant</Text>
        </Pressable>

        <View style={styles.rowText}>
          <View style={styles.hrPoint}>
            <Text style={styles.time}>43H</Text>
            <Text style={styles.point}>Your Time</Text>
          </View>

          <View style={styles.hrPoint}>
            <Text style={styles.time}>256</Text>
            <Text style={styles.point}>Your Points</Text>
          </View>

          <View style={styles.hrPoint}>
            <Text style={styles.number}>16</Text>
            <Text style={styles.point}>Your Plants</Text>
          </View>
          <View>
            <Text style={styles.recentText}> Recently activities</Text>
          </View>
        </View>

        <View>
          <ScrollView style={styles.list}>
            <ListItem
              style={styles.title}
              leadingMode="avatar"
              leading={<Avatar image={(source = {BucketImage})} />}
              title="plant type name"
              secondaryText="#34622"
            />
            <ListItem
              leadingMode="avatar"
              leading={<Avatar image={{uri: ''}} />}
              title="plant type name"
              secondaryText="#34622"
            />
            <ListItem
              leadingMode="avatar"
              leading={<Avatar image={{uri: ''}} />}
              title="plant type name"
              secondaryText="#34622"
            />
            <ListItem
              leadingMode="avatar"
              leading={<Avatar image={{uri: ''}} />}
              title="plant type name"
              secondaryText="#34622"
            />
            <ListItem
              leadingMode="avatar"
              leading={<Avatar image={{uri: ''}} />}
              title="plant type name"
              secondaryText="#34622"
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 400,
    position: 'absolute',
  },
  darkness: {
    backgroundColor: '#0e0e0e',
    opacity: 0.92,
    width: '100%',
    height: 400,
  },
  topic: {
    color: 'white',
    position: 'absolute',
    marginLeft: '16%',
    marginTop: '15%',
    fontSize: 30,
  },
  subTopic: {
    color: 'white',
    position: 'absolute',
    marginLeft: '20%',
    marginTop: '25%',
    fontSize: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c1d891',
    maxHeight: '15%',
    marginTop: '60%',
    marginLeft: '35%',
    position: 'absolute',
  },
  text: {
    fontSize: 10,
    letterSpacing: 0.25,
    color: '#131313',
  },

  rowText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: '80%',
  },
  time: {
    color: '#c1d891',
    fontSize: 30,
    marginLeft: '1%',
  },
  point: {
    color: '#ffffff',
    fontSize: 10,
    marginLeft: '1%',
  },
  number: {
    color: '#c1d891',
    fontSize: 30,
    marginLeft: '5%',
  },
  hrPoint: {
    marginHorizontal: 35,
  },
  list: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
  },
  title: {
    color: 'white',
  },
  recentText: {
    color: '#c1d891',
    fontSize: 10,
    paddingTop: '5%',
    marginLeft: '51%',
  },
});
