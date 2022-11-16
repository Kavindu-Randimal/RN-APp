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

import BackgroundImage from '../../../../assets/images/leaf.jpeg';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BucketImage from '../../../../assets/images/bucket.png';
import AddImage from '../../../../assets/images/addImage.png';

export default function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.coverImage} source={BackgroundImage}>
        <View style={styles.darkness} />

        <Text style={styles.subTopic}>Describe Your Planting</Text>
        <Text style={styles.plantType}>Select Your Plant Type</Text>

        <View style={styles.scrolView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image style={styles.scrollImage} source={BucketImage}></Image>
            </View>
            <View>
              <Image style={styles.scrollImage} source={BucketImage}></Image>
            </View>
            <View>
              <Image style={styles.scrollImage} source={BucketImage}></Image>
            </View>
            <View>
              <Image style={styles.scrollImage} source={BucketImage}></Image>
            </View>
            <View>
              <Image style={styles.scrollImage} source={BucketImage}></Image>
            </View>
          </ScrollView>
        </View>

        <View style={styles.rowText}>
          <View style={styles.hrPoint}>
            <Text style={styles.plantWidthText}>Select Your Plant Width</Text>
            <TextInput
              style={styles.plantWidthTextInput}
              placeholder=" 6 INCH"
            />
          </View>

          <View style={styles.hrPoint}>
            <Text style={styles.plantWidthText}>Select Your Plant Height</Text>
            <TextInput
              style={styles.plantWidthTextInput}
              placeholder=" 15 INCH"
            />
          </View>
        </View>

        <View style={styles.hrPoint}>
          <Text style={styles.nameText}>What is Your Name</Text>
          <TextInput
            style={styles.nameTextInput}
            placeholder=" some real plant name"
          />
        </View>

        <View style={styles.hrPoint}>
          <Text style={styles.nameText}>What is Your Plant Category</Text>
          <TextInput
            style={styles.nameTextInput}
            placeholder="some real plant name"
          />
        </View>

        <View style={styles.imageRow}>
          <View style={styles.addImageRow}>
            <Image style={styles.AddImage} source={AddImage} />
            <Text style={styles.AddImageText}>Add image</Text>
          </View>

          <View style={styles.addImageRow}>
            <Image style={styles.AddImage} source={AddImage} />
            <Text style={styles.AddImageText}>Add image</Text>
          </View>

          <View style={styles.addImageRow}>
            <View style={styles.imageBox}>
              <Image style={styles.AddImage} source={AddImage} />
              <Text style={styles.AddImageText}>Add image</Text>
            </View>
          </View>
        </View>

        <Text style={styles.submissonText}>
          Some word about what happend after your submission
        </Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Done</Text>
        </Pressable>
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
    height: '100%',
    position: 'absolute',
  },
  darkness: {
    backgroundColor: '#0e0e0e',
    opacity: 0.98,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  subTopic: {
    flex: 2,
    fontSize: 20,
    position: 'absolute',
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: '20%',
    marginTop: '30%',
  },
  plantType: {
    flex: 1,
    position: 'absolute',
    fontSize: 10,
    color: '#ffffff',
    marginTop: '45%',
    marginLeft: '3%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c1d891',
    color: 'white',
    marginLeft: '35%',
    height: 30,
    width: 100,
    marginTop: 20,
  },

  scrolView: {
    position: 'absolute',
    marginTop: '50%',
    color: 'white',
    padding: 10,
    flex: 1,
    width: '100%',
    // height: 130,
    // backgroundColor: 'white',
  },
  scrollImage: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: '#1d1d1d',
    borderRadius: 10,
    marginHorizontal: 15,
    borderWidth: 0.2,
    borderColor: 'white',
  },

  plantWidthText: {
    position: 'absolute',
    marginTop: '15%',
    color: '#ffffff',
    fontSize: 10,
    marginLeft: '1%',
  },
  plantWidthTextInput: {
    // position: 'absolute',
    marginTop: '25%',
    color: '#ffffff',
    marginLeft: '2%',
    borderWidth: 0.3,
    height: 30,
    padding: 3,
    width: 150,
    backgroundColor: '#1d1d1d',
    borderRadius: 20,
    borderColor: 'white',
    textAlign: 'center',
  },

  rowText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // position: 'absolute',
    marginTop: '80%',
  },

  hrPoint: {
    marginHorizontal: 15,
  },

  nameText: {
    position: 'absolute',
    marginTop: '10%',
    color: '#ffffff',
    fontSize: 10,
    marginLeft: '1%',
  },
  nameTextInput: {
    // position: 'absolute',
    marginTop: '15%',
    color: '#ffffff',
    marginLeft: '2%',
    borderWidth: 0.3,
    height: 30,
    padding: 3,
    width: '95%',
    backgroundColor: '#1d1d1d',
    borderRadius: 20,
    borderColor: 'white',
    paddingLeft: 12,
  },
  addImageRow: {
    marginHorizontal: 55,
  },
  AddImage: {
    position: 'absolute',
    height: 50,
    width: 50,
    marginTop: '10%',
  },
  AddImageText: {
    position: 'absolute',
    height: 50,
    width: 70,
    color: '#c1d891',
    fontSize: 10,
    marginTop: 40,
  },

  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: '150%',
  },

  submissonText: {
    color: '#ffffff',
    // position: 'absolute',
    marginTop: '35%',
    fontSize: 10,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
