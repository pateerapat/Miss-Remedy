import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

import PharmacistLoginComponent from "../components/PharmacistLoginComponent";
import UserLoginComponent from "../components/UserLoginComponent";

const bg = { uri : "https://i.ibb.co/DWdc43w/2.png" };

const LoginScreen = ({navigation}) => {

  var [ isView, setIsView ] = React.useState(0);
  var [ LoginComponent, setLoginComponent ] = React.useState(<UserLoginComponent navigator={navigation} />);

  function changeToUser() {
    if (isView == 1) {
      setLoginComponent(
      <UserLoginComponent
        navigator={navigation}
      />
      )
      setIsView(0);
    } 
  };

  function changeToPharmacist() {
    if (isView == 0) {
      setLoginComponent(
      <PharmacistLoginComponent 
        navigator={navigation}
      />
      )
      setIsView(1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View
          style={styles.layoutEffect}
        >
          <TouchableOpacity
            onPress={ () => {
              changeToUser()
            }}
          >
            <Text
              style={styles.userButton}
            >
              ผู้ใช้ทั่วไป
            </Text>
          </TouchableOpacity>
          <Text
            style={styles.separator}
          >
            |
          </Text>
          <TouchableOpacity
            onPress={ () => {
              changeToPharmacist()
            }}
          >
            <Text
              style={styles.pharButton}
            >
              เภสัช
            </Text>
          </TouchableOpacity>
        </View>
        <View>
            {LoginComponent}
        </View>
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
  separator: {
    fontFamily: "Kanit",
    fontSize: 20,
    paddingHorizontal: "30px",
  },
  layoutEffect: {
    marginTop: "340px",
    flexDirection: "row",
  },
  userButton: {
    fontFamily: "Kanit",
    fontSize: 20,
  },
  pharButton: {
    fontFamily: "Kanit",
    fontSize: 20,
  },
  bRegister: {
    backgroundColor: "#FFC63C",
    borderRadius: 30,
    paddingVertical: "10px",
    paddingHorizontal: "90px",
    margin: "10px",
  },
  bTextRegister: {
    fontFamily: "Kanit",
    fontSize: 20,
    color: "#ffffff",
  },
});

export default LoginScreen;
