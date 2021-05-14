import React, { useState, useEffect, useActions } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Video from "react-native-video";
const data = [
  {
    id: 1,
    title: 'abc',
    img: 'https://cdn.pixabay.com/photo/2020/11/22/16/45/nutcracker-5767159_960_720.jpg'
  },
  {
    id: 2,
    title: 'abc',
    img: 'https://cdn.pixabay.com/photo/2020/12/08/14/13/blackbird-5814541_1280.jpg'
  },
  {
    id: 3,
    title: "abc",
    img: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
];
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState();

  useEffect(() => {
    console.log("list", list);
  })

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        setModalVisible(true);
        setList(item);
        return;
      }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.img
          }}
        />
        <Text style={styles.title}>{item.title} </Text>

      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>

        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '100%',
            borderBottomColor: 'white',
          }}
        />
        <View style={{width:'100%',height:'25%',backgroundColor:'yellow'}}>
          {/* <Video
            source={{ uri: "https://static.videezy.com/system/resources/previews/000/044/059/original/Circle-Cut_x264.mp4" }}
            style={styles.backgroundVideo}
            // muted={true}
            // repeat={true}
            resizeMode={"cover"}
          // rate={1.0}
          // ignoreSilentSwitch={"obey"}
          /> */}
          <Video source={{uri: "background"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
        />

        <Modal
          animationType="slide"
          // transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: list ? list.img : ''
                }}
              />
              <Text style={styles.modalText}>selelcted</Text>
              {console.log("inside", list)}
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "green" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Back</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default App;
// const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //padding: 10,
    //marginTop:10,
  },

  item: {
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    marginLeft: 60,
    bottom: 3,
    color: 'white',
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  // centeredView: {
  // //   flex: 1,
  // //   justifyContent: "center",
  //   alignItems: "center",
  // //   // marginTop: 22
  // },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  backgroundVideo: {
    height: 300,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 90,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
  rowBack: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    marginLeft: 330,
  },
  tinyLogo: {
    height: 200,
    width: '100%',
  }
});





// import React, {useState, useRef} from 'react';

// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import Video from 'react-native-video';

// import
//   MediaControls, {PLAYER_STATES}
// from 'react-native-media-controls';

// const App = () => {
//   const videoPlayer = useRef(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [paused, setPaused] = useState(false);
//   const [
//     playerState, setPlayerState
//   ] = useState(PLAYER_STATES.PLAYING);
//   const [screenType, setScreenType] = useState('content');

//   const onSeek = (seek) => {
//     videoPlayer.current.seek(seek);
//   };

//   const onPaused = (playerState) => {
//     setPaused(!paused);
//     setPlayerState(playerState);
//   };

//   const onReplay = () => {
//     setPlayerState(PLAYER_STATES.PLAYING);
//     videoPlayer.current.seek(0);
//   };

//   const onProgress = (data) => {
//     // Video Player will progress continue even if it ends
//     if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
//       setCurrentTime(data.currentTime);
//     }
//   };

//   const onLoad = (data) => {
//     setDuration(data.duration);
//     setIsLoading(false);
//   };

//   const onLoadStart = (data) => setIsLoading(true);

//   const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

//   const onError = () => alert('Oh! ', error);

//   const exitFullScreen = () => {
//     alert('Exit full screen');
//   };

//   const enterFullScreen = () => {};

//   const onFullScreen = () => {
//     setIsFullScreen(isFullScreen);
//     if (screenType == 'content') setScreenType('cover');
//     else setScreenType('content');
//   };

//   const renderToolbar = () => (
//     <View>
//       <Text style={styles.toolbar}> toolbar </Text>
//     </View>
//   );

//   const onSeeking = (currentTime) => setCurrentTime(currentTime);

//   return (
//     <View style={{flex: 1}}>
//       <Video
//         onEnd={onEnd}
//         onLoad={onLoad}
//         onLoadStart={onLoadStart}
//         onProgress={onProgress}
//         paused={paused}
//         ref={videoPlayer}
//         resizeMode={screenType}
//         onFullScreen={isFullScreen}
//         source={{
//           uri:
//             'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
//         }}
//         style={styles.mediaPlayer}
//         volume={10}
//       />
//       <MediaControls
//         duration={duration}
//         isLoading={isLoading}
//         mainColor="#333"
//         onFullScreen={onFullScreen}
//         onPaused={onPaused}
//         onReplay={onReplay}
//         onSeek={onSeek}
//         onSeeking={onSeeking}
//         playerState={playerState}
//         progress={currentTime}
//         toolbar={renderToolbar()}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   toolbar: {
//     marginTop: 30,
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   mediaPlayer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//   },
// });