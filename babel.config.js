module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'packagejson',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@src': './src',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/components',
        },
      },
    ],
  ],
};
