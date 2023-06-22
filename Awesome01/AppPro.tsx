import React from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isdarkMode = useColorScheme() === 'dark';
  return (
    <View style={style.container}>
      <Text style={isdarkMode ? style.whiteText : style.darkText}>
        Hello World!
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#FFF',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
