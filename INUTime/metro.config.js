const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('cjs');

// metro.config.js 파일에 cjs 에러를 위한 코드 추가.

module.exports = config;

//firebase 사용하기
// npx expo install firebase
// @react-native-async-storage/async-storage
// import { initializeApp } from "firebase/app";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// 파이어베이스 초기화는 앱이 처음 구동될 때 시행되어야 함.
