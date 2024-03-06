/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LayoutComponent from './component/LayoutComponent';
import FlexComponent from './component/FlexComponent';
import FlexDirectionBasics from './component/FlexDirectionBasics';
import DirectionLayout from './component/DirectionLayout';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => LayoutComponent);
AppRegistry.registerComponent(appName, () => FlexComponent);
AppRegistry.registerComponent(appName, () => FlexDirectionBasics);
AppRegistry.registerComponent(appName, () => DirectionLayout);
