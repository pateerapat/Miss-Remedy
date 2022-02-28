import React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";

const bg = { uri : "https://i.ibb.co/ng3x0kQ/1.png" };

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View
          style={styles.layoutEffect}
        >
          <TouchableOpacity
            style={styles.bRegister}
            onPress={ () => {
              navigation.navigate("RegisterScreen")
            }}
          >
            <Text
              style={styles.bTextRegister}
            >
              ลงทะเบียน
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bLogin}
            onPress={ () => {
              navigation.navigate("LoginScreen")
            }}
          >
            <Text
              style={styles.bTextLogin}
            >
              เข้าสู่ระบบ
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  layoutEffect: {
    marginTop: "500px",
  },
  bRegister: {
    backgroundColor: "#FFC63C",
    borderRadius: 30,
    paddingVertical: "10px",
    paddingHorizontal: "50px",
    margin: "10px",
  },
  bTextRegister: {
    fontFamily: "Kanit",
    fontSize: 20,
    color: "#ffffff",
  },
  bLogin: {
    backgroundColor: "#000000",
    borderRadius: 30,
    paddingVertical: "10px",
    paddingHorizontal: "50px",
    margin: "10px",
  },
  bTextLogin: {
    fontFamily: "Kanit",
    fontSize: 20,
    color: "#ffffff",
  }
});

export default WelcomeScreen;
