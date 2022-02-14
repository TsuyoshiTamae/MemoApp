import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

import { dateToString } from '../utils';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memoListItem}
      onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
    >
      <View>
        <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
        <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
      </View>
      <TouchableOpacity
        style={styles.memoDelete}
        onPress={() => { Alert.alert('Are you sure?'); }}
      >
        <Feather name="x" size={40} color="#7C7C7C" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 10,
    lineHeight: 32,
    color: '#696969',
  },
  memoDelete: {
    padding: 8,
  },
  container: {
    flex: 1,
  },
});
