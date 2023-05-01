module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Add the reanimated plugin here
      'react-native-reanimated/plugin',
    ],
  };
};
