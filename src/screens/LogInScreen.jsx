import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import AddBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <AddBar />
      <View style={styles.inner}>
        <Text style={styles.Title}>Log In</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Pass Word" />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sigh up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  Title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 16,
    lineHeight: 24,
    color: '#AC1616',
  },
  footer: {
    flexDirection: 'row',
  },
});
