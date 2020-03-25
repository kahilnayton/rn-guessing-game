import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform // Find the default platform you're running on
} from "react-native";

import Colors from "../constants/colors";

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <Text style={props.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  headerIOS: {
    borderBottomColor: "#eee",
    backgroundColor: Colors.primary,
    borderBottomWidth: 1
  },
  headerAndroid: {
    borderBottomColor: Colors.primary
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
    fontSize: 18
  }
});

export default Header;
