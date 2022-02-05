import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 80,
    backgroundColor: '#AC1616',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 36,
    lineHeight: 40,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
