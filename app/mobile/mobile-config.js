App.info({
  id: 'com.boilerplate.meteorjs.rebolon',
  name: 'MeteorJS Boilerplate',
  description: 'This is a sample app for building Smartphone app with MeteorJS',
  author: 'Rebolon',
  email: 'richard.tribes@gmail.com',
  website: 'http://about.me/benjamin.richard'
});

App.accessRule('*');

// Set up resources such as icons and launch screens.
App.icons({
  'android_mdpi': 'private/icons/android_mdpi.png',
  'android_ldpi': 'private/icons/android_ldpi.png',
  'android_hdpi': 'private/icons/android_hdpi.png',
  'android_xhdpi': 'private/icons/android_xhdpi.png',
});

App.launchScreens({
  'android_mdpi_portrait': 'private/splash/android_mdpi.png',
  'android_ldpi_portrait': 'private/splash/android_ldpi.png',
  'android_hdpi_portrait': 'private/splash/android_hdpi.png',
  'android_xhdpi_portrait': 'private/splash/android_xhdpi.png'
  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
//App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');

// Pass preferences for a particular PhoneGap/Cordova plugin
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');