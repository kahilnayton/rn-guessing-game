import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, // use this on IOS
  TouchableNativeFeedback, // Use this on android
  Platform
} from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity; // This is a cool react way to assign a variable and then conditionally render

  if (Platform.OS == "android" && Platform.Version >= 21) { // This would be great for changing the render based on screen size also
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.ButtonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.5}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden" // This is a hack to get rid of the overflow issue 
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 20
  }
});

export default MainButton;
