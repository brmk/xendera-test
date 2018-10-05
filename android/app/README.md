## Versions

Node: v9.2.1
React v16.5.0,
React Native: v0.57.1

## Install

1. Install React Native https://facebook.github.io/react-native/docs/getting-started.html
2. Run `npm i`
3. iOS (optional) - Install cocoapods if not installed `sudo gem install cocoapods`
4. iOS - Install pods `cd ios/ && pod install && cd ..`

## Running

#### iOS

1. Open `ios/XeneraTest.xcworkspace` in the XCode
2. Select simulator for your target on top of the window
3. Press `Run`

#### Android

1. Connect your android device
2. Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running `adb devices`. Seeing device in the right column means the device is connected. You must have only one device connected at a time.
3. `npm run android`

## Release

### iOS build prerequisites

0. Install XCode and react native dependencies
1. Install cocoapods
2. Run `cd ios/ && pod install && cd ..`

### iOS build

1. Open `ios/XeneraTest.xcworkspace` in the XCode and make sure that you have an access to the App Store Dev team
2. Increment build number
3. Select `Generic iOS Device` for the build target
3. Product -> Archive
4. Window -> Organizer -> Upload

### Android build prerequisites

0. Install Android studio and react native dependencies
1. Place the keystore file to the `./android/app` folder
2. Append this code to the end of the file `~/.gradle/gradle.properties` replacing `<password>` with the password to the keystore:

```
XENDERA_TEST_RELEASE_STORE_FILE=xendera-test.keystore
XENDERA_TEST_RELEASE_KEY_ALIAS=xendera-test
XENDERA_TEST_RELEASE_STORE_PASSWORD=<password>
XENDERA_TEST_RELEASE_KEY_PASSWORD=<password>
```

### Android build

1. Increment build number in `android/app/build.gradle`
2. Run `npm run build-android`
