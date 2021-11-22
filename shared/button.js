import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function FlatButton({ text }) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor : '#3683de',
    width: widthPercentageToDP('50%'),
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});