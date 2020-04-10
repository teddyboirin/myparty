import React from 'react';
import {StyleSheet} from 'react-native';
import JoinsUsForm from "../Forms/JoinsUsForm";

export default function Navigation() {


  return (
      <JoinsUsForm></JoinsUsForm>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    },
});
