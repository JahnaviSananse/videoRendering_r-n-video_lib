import React, {useState, useRef} from 'react';
import {useEffect, useActions} from 'react';
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
import {IMAGE} from '../../assests/Images/Images';
import {styles} from './style';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
const data = [
  {
    id: 1,
    title: 'Childhood dreams',
    intro: 'Gaur Gopal Das | 3.1M views | 11 months ago',
    img:
      'https://static.videezy.com/system/resources/previews/000/045/482/original/20_14_02.mp4',
    icon:
      'https://cdn.pixabay.com/photo/2020/11/22/16/45/nutcracker-5767159_960_720.jpg',
  },
  {
    id: 2,
    title: '5 things to do every morning',
    intro: 'Gaur Gopal Das | 3.1M views | 11 months ago',
    img:
      'https://static.videezy.com/system/resources/previews/000/004/382/original/COWS_AT_THE_GRASS.mp4',
    icon:
      'https://cdn.pixabay.com/photo/2020/12/08/14/13/blackbird-5814541_1280.jpg',
  },
  {
    id: 3,
    title: 'My SETUP Tour',
    intro: 'Gaur Gopal Das | 3.1M views | 11 months ago',
    img:
      'https://static.videezy.com/system/resources/previews/000/008/296/original/Young_African_American_Woman_Laughing_Dancing_2.mp4',
    icon:
      'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg',
  },
  {
    id: 4,
    title: 'Childhood dreams',
    intro: 'Gaur Gopal Das | 3.1M views | 11 months ago',
    img:
      'https://static.videezy.com/system/resources/previews/000/042/042/original/Ramdom_Lines_x264.mp4',
    icon:
      'https://cdn.pixabay.com/photo/2020/11/22/16/45/nutcracker-5767159_960_720.jpg',
  },
  {
    id: 5,
    title: '5 things to do every morning',
    intro: 'Gaur Gopal Das | 3.1M views | 11 months ago',
    img:
      'https://static.videezy.com/system/resources/previews/000/043/977/original/DSC_8447_V1-0010.mp4',
    icon:
      'https://cdn.pixabay.com/photo/2020/12/08/14/13/blackbird-5814541_1280.jpg',
  },
  {
    id: 6,
    title: 'My SETUP Tour',
    intro: 'Gaur Gopal Das | 3.1M views | 11 months ago',
    img:
      'https://static.videezy.com/system/resources/previews/000/043/457/original/00005.mp4',
    icon:
      'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg',
  },
];
const youtubeScreen = () => {
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState('content');

  const onSeek = (seek) => {
    //Handler for change in seekbar
    videoPlayer.current.seek(seek);
  };

  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert('Oh! ', error);

  const exitFullScreen = () => {
    alert('Exit full screen');
  };

  const enterFullScreen = () => {};

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );

  const onSeeking = (currentTime) => setCurrentTime(currentTime);
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState();

  useEffect(() => {
    console.log('list', list);
  });

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setList(item);
          return;
        }}>
        <Video
          source={{uri: item.img}}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.img,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.tinyIcon}
            source={{
              uri: item.icon,
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.intro}>{item.intro} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}></View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '100%',
            borderBottomColor: 'white',
          }}
        />

        <FlatList data={data} renderItem={renderItem} />

        <Modal
          animationType="slide"
          // transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Video
                  onEnd={onEnd}
                  onLoad={onLoad}
                  onLoadStart={onLoadStart}
                  onProgress={onProgress}
                  paused={paused}
                  ref={videoPlayer}
                  source={{uri: list ? list.img : ''}}
                  style={styles.mediaPlayer}
                  style={styles.backgroundVideoSel}
                  muted={true}
                  // repeat={true}
                  resizeMode={'cover'}
                  rate={1.0}
                  ignoreSilentSwitch={'obey'}
                />
              </View>

              <MediaControls
                duration={duration}
                isLoading={isLoading}
                mainColor="#333"
                onFullScreen={onFullScreen}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                playerState={playerState}
                progress={currentTime}
                toolbar={renderToolbar()}
              />

              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.tinyIconSel}
                    source={{
                      uri: list ? list.icon : '',
                    }}
                  />
                  <View>
                    <Text style={styles.titleSel}>
                      {list ? list.title : ''}
                    </Text>

                    <Text style={styles.introSel}>
                      {list ? list.intro : ''}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '90%',
                    height: 30,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    top: '60%',
                  }}>
                  <Image
                    style={{width: 25, height: 25, top: 10}}
                    source={IMAGE.LIKE}
                  />
                  <Image
                    style={{width: 25, height: 25, top: 10}}
                    source={IMAGE.DISLIKE}
                  />
                  <Image
                    style={{width: 25, height: 25, top: 10}}
                    source={IMAGE.SHARE}
                  />
                  <Image
                    style={{width: 25, height: 25, top: 10}}
                    source={IMAGE.DOWNLOAD}
                  />
                  <Image
                    style={{width: 25, height: 25, top: 10}}
                    source={IMAGE.FLOPPYDISK}
                  />
                </View>
                <View
                  style={{
                    width: '90%',
                    height: 30,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    marginRight: 10,
                    top: '65%',
                  }}>
                  <Text style={{fontSize: 13, color: 'black'}}> 1.4K </Text>
                  <Text style={{fontSize: 13, color: 'black'}}> 90 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}> 50 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}> 10 </Text>
                  <Text style={{fontSize: 13, color: 'black'}}> 2 </Text>
                </View>
                <View>
                  <View
                    style={{
                      borderWidth: 0.3,
                      width: '100%',
                      borderColor: 'black',
                      marginBottom: 5,
                      top: '430%',
                    }}
                  />
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.tinyIconbet}
                      source={{
                        uri: list ? list.icon : '',
                      }}
                    />
                    <View style={{flexDirection: 'column'}}>
                      {/* <Text style={styles.titlebet}> {list.title} </Text>
                      <Text style={styles.introbet}> {list.intro} </Text> */}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          marginLeft: 10,
                          top: '520%',
                          color: 'red',
                          // marginBottom: 2,
                        }}>
                        Subscribe
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.3,
                      width: '100%',
                      borderColor: 'black',
                      top: '450%',
                    }}
                  />
                </View>
              </View>
              {/* <Text style={styles.modalText}>selelcted</Text> */}
              {console.log('inside', list)}
              <TouchableHighlight
                style={{
                  backgroundColor: 'green',
                  borderRadius: 20,
                  width: 60,
                  padding: 5,
                  bottom: '89%',
                  marginLeft: 5,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}> Back </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default youtubeScreen;
// const { height } = Dimensions.get("window");
