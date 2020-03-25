import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  Image
} from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is Over!</TitleText>
          <View style={styles.imageContainer}>
            <Image
              // source={require("../assets/original.png")}
              source={{
                uri:
                  "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/66/14/d8/kangchenjunga.jpg"
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
              Your phone needed{" "}
              <Text style={styles.highlight}>{props.roundsNumber}</Text>{" "}
              round(s) to guess the number
              <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    width: Dimensions.get("window").width * 0.7, // 70% of the available height
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    textAlign: "center"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default GameOverScreen;
