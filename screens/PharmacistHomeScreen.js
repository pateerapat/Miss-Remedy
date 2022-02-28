import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "react-native-elements";

import { useSelector } from "react-redux";

import PharmacistHospitalComponent from "../components/PharmacistHospitalComponent";

const bg = { uri : "https://i.ibb.co/f4TdQnk/bg1.png" };
const icon = { uri : "https://i.ibb.co/8MZVDTX/hospitalf.png" };
const image = { uri : "https://i.ibb.co/vsxjxgB/image.png" };

const PharmacistHomeScreen = ({route, navigation}) => {

  const medSelect = useSelector((state) => state.remedy.med);

  var isView = 0;

  // { route.params.username }
  var [ PharmacistHeader, setPharmacistHeader ] =
  React.useState(
    <View>
      <View style={styles.byRow}>
        <View style={styles.imagePadding}>
          <Image
            style={styles.userLogo}
            source={image}
          />
        </View>
        <View style={styles.dataPadding}>
          <Text style={styles.dataText}>
            {route.params.shopname}
          </Text>
          <Text style={styles.miniDataText}>
            คุณ {route.params.name} {route.params.surname}
          </Text>
        </View>
      </View>
    </View>
  );

  var [ ToggleButton, setToggleButton ] =
  React.useState(
    <View>
      <View style={styles.byRowIcon}>
        <TouchableOpacity style={styles.iconPadding}>
          <Image
            style={styles.icon}
            source={icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  var [ SelectedComponent, setSelectedComponent ] =
  React.useState(
    <PharmacistHospitalComponent navigator={navigation} router={route}/>
  );

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        placement="center"
        centerComponent={<Text style={styles.headerText}>Miss Remedy</Text>}
        rightComponent={
          <Ionicons 
            name="log-out-outline" size={40}
            onPress={ () => {
              navigation.navigate("LoginScreen")
            }}
           />}
      />
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View>
          { PharmacistHeader }
        </View>
        <View>
          { ToggleButton }
        </View>
        <View>
          { SelectedComponent }
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
    width: "100%",
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
  userLogo: {
    width: 75,
    height: 75,
  },
  imagePadding: {
    marginTop: "45px",
    marginLeft: "30px",
  },
  dataPadding: {
    marginTop: "40px",
    marginLeft: "20px",
  },
  byRow: {
    flexDirection: "row",
  },
  byColumn: {
    flexDirection: "column",
  },
  dataText: {
    fontFamily: "Kanit",
    fontSize: "18px",
    fontWeight: "600",
    color: "#ffffff"
  },
  miniDataText: {
    fontFamily: "Kanit",
    fontSize: "15px",
    color: "#ffffff"
  },
  icon: {
    width: 100,
    height: 120,
  },
  iconOpaque: {
    width: 100,
    height: 120,
    opacity: 0.5,
  },
  iconText: {
    fontFamily: "Kanit",
    fontSize: "12px",
    fontWeight: "600",
    color: "#FFC63C",
    width: 110,
  },
  iconPadding: {
    width: 105,
  },
  byRowIcon: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "65px",
  },
  componentStyle: {
    marginTop: "20px",
  },
  titleComponent: {
    fontFamily: "Kanit",
    fontSize: "22px",
    fontWeight: "600",
    color: "#FFC63C",
    textAlign: "center",
  },
  calendar: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    marginLeft: "12px",
  },
  bgYellow: {
    backgroundColor: "#FFC63C",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "10px",
    flexDirection: "row",
  },
  receivePadding: {
    margin: "20px",
  },
  receiveHeaderText: {
    fontFamily: "Kanit",
    fontSize: "18px",
    fontWeight: "600",
  },
  receiveText: {
    fontFamily: "Kanit",
    fontSize: "15px",
  },
  receiveTextChat: {
    fontFamily: "Kanit",
    fontSize: "15px",
    textAlign: "center",
  },
  iconPaddingChat: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    width: 60,
    justifyContent: "flex-end",
    marginLeft: "60px",
  },
  widthEnd: {
    width: 250,
  },
  textFont: {
    fontFamily: "Kanit",
    fontSize: "15px",
  },
  textTitleFont: {
    fontFamily: "Kanit",
    fontSize: "20px",
    fontWeight: "600",
  }
});

export default PharmacistHomeScreen;
