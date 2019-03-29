import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewAudit from './screen/newaudit.js';
import UpdateAudit from './screen/updateaudit.js';
import AuditHeader from './header/header.js';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <AuditHeader />
          <View style={styles.divider}/>
          <NewAudit />
          <View style={styles.divider}/>
          <UpdateAudit />
          <View style={styles.divider}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'flex-start',
      flex: 1,
      marginTop: 30
  },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    alignSelf: 'stretch',
    margin: 10
  }
});
