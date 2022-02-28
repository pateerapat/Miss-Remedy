import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "react-native-elements";

import UserInputComponent from "../components/UserInputComponent";
import PharmacistInputComponent from "../components/PharmacistInputComponent";

const bg = { uri : "https://i.ibb.co/f4TdQnk/bg1.png" };

const RegisterScreen = ({navigation}) => {

  var [ UserComponent, setUserComponent ] =
  React.useState(
    <TouchableOpacity
      style={styles.leftButton}
      onPress={ () => {
        changeToUser()
      }}
    >
      <Text
        style={styles.leftText}
      >
        ผู้ใช้ทั่วไป
      </Text>
    </TouchableOpacity>
  );

  var [ PharmacistComponent, setPharmacistComponent ] =
  React.useState(
    <TouchableOpacity
      style={styles.rightButton}
      onPress={ () => {
        changeToPharmacist()
      }}
    >
      <Text
        style={styles.rightText}
      >
        เภสัช
      </Text>
    </TouchableOpacity>
  );

  var [ InputComponent, setInputComponent ] =
  React.useState(
    <UserInputComponent navigator={navigation} />
  );

  var isView = 0;

  function changeToUser() {
    if (isView == 1) {
      setInputComponent(<UserInputComponent navigator={navigation} />)
      setPharmacistComponent(
        <TouchableOpacity
          style={styles.rightButton}
          onPress={ () => {
            changeToPharmacist()
          }}
        >
          <Text
            style={styles.rightText}
          >
            เภสัช
          </Text>
        </TouchableOpacity>
      )
      setUserComponent(
        <TouchableOpacity
          style={styles.leftButton}
          onPress={ () => {
            changeToUser()
          }}
        >
          <Text
            style={styles.leftText}
          >
            ผู้ใช้ทั่วไป
          </Text>
        </TouchableOpacity>
      )
      isView = 0;
    } 
  };

  function changeToPharmacist() {
    if (isView == 0) {
      setInputComponent(<PharmacistInputComponent navigator={navigation} />)
      setPharmacistComponent(
        <TouchableOpacity
          style={styles.leftButton}
          onPress={ () => {
            changeToPharmacist()
          }}
        >
          <Text
            style={styles.leftText}
          >
            เภสัช
          </Text>
        </TouchableOpacity>
      )
      setUserComponent(
        <TouchableOpacity
          style={styles.rightButton}
          onPress={ () => {
            changeToUser()
          }}
        >
          <Text
            style={styles.rightText}
          >
            ผู้ใช้ทั่วไป
          </Text>
        </TouchableOpacity>
      )
      isView = 1;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        placement="center"
        leftComponent={
          <Ionicons
            name="arrow-back-outline" size={40}
            onPress={ () => {
              navigation.navigate("WelcomeScreen")
            }}
          />}
        centerComponent={<Text style={styles.headerText}>Miss Remedy</Text>}
      />
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View>
          <Text style={styles.registerText}>
            ลงทะเบียนเข้าใช้งาน
          </Text>
        </View>
        <View style={styles.subHeader}>
          {UserComponent}
          {PharmacistComponent}
        </View>
        <View
          style={styles.layoutEffect}
        >
          {InputComponent}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  layoutEffect: {
    marginTop: "50px",
  },
  bRegister: {
    backgroundColor: "#FFC63C",
    borderRadius: "30px",
    paddingVertical: "10px",
    paddingHorizontal: "50px",
    margin: "10px",
  },
  bTextRegister: {
    fontFamily: "Kanit",
    fontSize: "20px",
    color: "#ffffff",
  },
  bLogin: {
    backgroundColor: "#000000",
    borderRadius: "30px",
    paddingVertical: "10px",
    paddingHorizontal: "50px",
    margin: "10px",
  },
  bTextLogin: {
    fontFamily: "Kanit",
    fontSize: "20px",
    color: "#ffffff",
  },
  header: {
    backgroundColor: "#FFC63C",
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "900",
    paddingTop: "7px",
  },
  subHeader: {
    flexDirection: "row",
  },
  registerText: {
    fontFamily: "Kanit",
    fontSize: "17px",
    paddingTop: "30px",
    textAlign: "left",
  },
  leftButton: {
    backgroundColor: "#000000",
    borderRadius: "30px",
    paddingVertical: "10px",
    textAlign: "center",
    width: "150px",
    margin: "10px",
  },
  leftText: {
    fontFamily: "Kanit",
    fontSize: "20px",
    color: "#ffffff",
  },
  rightButton: {
    backgroundColor: "#FFE097",
    borderRadius: "30px",
    paddingVertical: "10px",
    textAlign: "center",
    width: "150px",
    margin: "10px",
  },
  rightText: {
    fontFamily: "Kanit",
    fontSize: "20px",
    color: "#ffffff",
  }
});

export default RegisterScreen;
