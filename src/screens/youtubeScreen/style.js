import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    // marginTop:10,
  },

  item: {
    backgroundColor: 'black',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 13,
    // bottom: 3,
    color: 'white',
  },
  intro: {
    fontSize: 12,
    marginLeft: 15,
    // bottom: 3,
    color: 'grey',
    marginBottom: 15,
  },
  titleSel: {
    fontSize: 18,
    marginLeft: 13,

    color: 'black',
    marginBottom: 2,
    top: '430%',
  },
  introSel: {
    fontSize: 12,
    color: 'black',
    // right: 5,
    left: 8,
    // bottom: 3,
    color: 'grey',
    top: '440%',
    // marginBottom: 15,
  },
  tinyIconSel: {
    top: '100%',
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  titlebet: {
    fontSize: 20,
    marginLeft: 13,
    top: '500%',
    color: 'black',
    marginBottom: 2,
    // top: '83%',
  },
  introbet: {
    fontSize: 12,
    marginLeft: 15,
    // bottom: 3,
    color: 'grey',
    top: '500%',
    // marginBottom: 15,
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    height: 200,
    backgroundColor: 'black',
    // justifyContent: 'center',
  },
  // centeredView: {
  // //   flex: 1,
  // //   justifyContent: "center",
  //   alignItems: "center",
  // //   // marginTop: 22
  // },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundVideo: {
    height: 190,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  backgroundVideoSel: {
    height: 190,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
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
    top: 15,
    height: 200,
    width: '100%',
  },
  tinyIcon: {
    // marginTop: '60%',
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  tinyIconbet: {
    top: '25%',
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
