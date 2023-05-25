import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.TupTqkhX}>{"These are same studios. This one is still using old modules. There is a ticket to refactor this somewhere"}</Text><Text style={styles.cDFQqrBM}>{"The \"onSearch\" function uses the same endpoint and passes in the same search param"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  TupTqkhX: {
    width: 324,
    height: 225,
    lineHeight: 36,
    fontSize: 36,
    borderRadius: 0
  },
  cDFQqrBM: {
    width: 326,
    height: 238,
    lineHeight: 35,
    fontSize: 36,
    borderRadius: 0
  }
});
export default Untitled2;