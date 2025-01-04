/*
 * TODO: value * ratio difference between Android and iOS is of 2 value;
 * 16 in iOS is equals to 14 in android but this need to be verify.
 */

import {Dimensions, Platform, StatusBar} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-screen-helper';

const {width, height} = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const isKitKatAbove = Platform.OS === 'android' && Platform.Version >= 19;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = size => (screenHeight / guidelineBaseHeight) * size;

const ratio = (iosSize, androidSize, doScale = false) =>
  Platform.select({
    ios: doScale ? scaleVertical(iosSize) : iosSize,
    android: doScale
      ? scaleVertical(androidSize || iosSize)
      : androidSize || iosSize,
  });

const generatedFontSize = (iosFontSize, androidFontSize) =>
  Platform.select({
    ios: iosFontSize,
    android: androidFontSize || iosFontSize,
  });

const hitSlop = {top: 10, bottom: 10, left: 10, right: 10};
const hitSlopLarge = {top: 20, bottom: 20, left: 20, right: 20};
const navbarHeight = Platform.OS === 'ios' ? 44 : 56;
const statusBarHeightIos = ifIphoneX() ? 44 : 20;
const statusBarHeight =
  Platform.OS === 'ios' ? statusBarHeightIos : StatusBar.currentHeight;
const navBarWithStatusHeight = navbarHeight + statusBarHeight;
const bottomSpaceIphoneX = ratio(34);
const bottomPadding = ifIphoneX() ? bottomSpaceIphoneX : ratio(20);
const bottomPaddingIphoneX = ifIphoneX() ? bottomSpaceIphoneX : 0;

export default {
  scale,
  scaleVertical,
  ratio,
  generatedFontSize,
  screenWidth,
  screenHeight,
  isKitKatAbove,
  hitSlop,
  hitSlopLarge,
  navbarHeight,
  statusBarHeight,
  navBarWithStatusHeight,
  bottomSpaceIphoneX,
  bottomPaddingIphoneX,
  bottomPadding,
  baseMargin: ratio(16),
  smallMargin: ratio(8),
  midMargin: ratio(12),
  largeMargin: ratio(20),
  app: {
    homeParallexHeight: ratio(260),
    profileImageSize: ratio(90),
    converImageSize: ratio(120) + statusBarHeight,
    swipeActionWidth: ratio(90),
  },
};
