import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import ImagePicker from 'react-native-image-picker';
import { Actions } from "react-native-router-flux";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class Personal extends React.Component {

  constructor() {
    super();
    this.state = {
      avatarSource: null,
      videoSource: null
    }
  }
  //选择图片
  selectPhotoTapped = () => {
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从相册选择',
      customButtons: [
        { name: 'fb', title: '啦啦' },
      ],
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      durationLimit: 10,
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.8,
      angle: 0,
      allowsEditing: false,
      noData: false,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log("------------------");
        console.log(source);
        console.log("------------------");

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }


  //触摸事件
  avatar = (e) => {
    console.log(e);
    console.log("==========");
  }
  render() {
    return (
      <View style={styles.contains}>
        <StatusBar
          backgroundColor="#514a4a"
          barStyle="dark-content"
        // hidden={true}/
        />
        <View style={styles.userInfo}>
          <View style={styles.personal_img}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.selectPhotoTapped()}
            >
              {/* <View> */}
              <Image
                source={this.state.avatarSource ? this.state.avatarSource : require('./img/kobe.jpg')}
                style={styles.img} />
              {/* </View> */}
            </TouchableOpacity>
            <Text style={styles.usename}>zp</Text>
          </View>
          <View>
          </View>
        </View>
        {/* <View style={styles.container_margin}> */}

        <TouchableNativeFeedback
          onPress={() => Actions.Setting()}>
          <View style={styles.handle}>
            <View style={styles.handle_icon}>
              <Icon name={"gear"} size={20} color={'#BBB'} />
            </View>
            <Text style={styles.setting}>设置</Text>
          </View>
        </TouchableNativeFeedback>

        {/* </View> */}
      </View>

    )
  }

}

const styles = StyleSheet.create({
  contains: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ebe7e7"
  },
  //加边距
  container_margin: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,

  },
  userInfo: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#514a4a',
    // height:100
  },
  personal_img: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
  ,
  img: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  usename: {
    color: "white",
    fontSize: 18,
    // backgroundColor: "blue",
    height: 80,
    width: 80,
    lineHeight: 60,
    textAlign: "left",
    marginLeft: 20
  },
  handle: {
    flex: 0.08,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    marginTop: 15
  },
  handle_icon: {
    flex: 0.11,

  },
  setting: {
    fontSize: 18,
  }
});