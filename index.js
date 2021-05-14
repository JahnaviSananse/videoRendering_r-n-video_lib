/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import youtubeScreen from './src/screens/youtubeScreen/index';
import App from './imageModal';

AppRegistry.registerComponent(appName, () => youtubeScreen);
