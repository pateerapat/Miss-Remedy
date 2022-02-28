import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "react-native-elements";

import { useSelector } from "react-redux";

const PharmacistUserDataScreen = ({navigation, route}) => {

  const medSelect = useSelector((state) => state.remedy.med);

  const dataSet = route.params.router

  let itemList = []

  var price = 0

  medSelect.forEach((item, index) => {
    price += parseInt(item.price)
    itemList.push( 
      <View key={index} style={styles.bgYellow}>
        <View style={styles.widthEnd}>
          <Text style={styles.receiveHeaderText}>
            x{item.quantity} | {item.name}
          </Text>
          <Text style={styles.receiveText}>
            {item.description}
          </Text>
          <Text style={styles.receiveText}>
            ค่ายา : ฿{item.price}
          </Text>
        </View>
      </View>
    )
  })

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        placement="center"
        leftComponent={
          <Ionicons 
            name="arrow-back-outline" size={40}
            onPress={ () => {
              navigation.navigate("PharmacistHomeScreen", {id: dataSet.params.id, name: dataSet.params.name, surname: dataSet.params.surname, arr: dataSet.params.arr})
            }}
          />}
        centerComponent={<Text style={styles.headerText}>Miss Remedy</Text>}
        rightComponent={
        <Ionicons
          name="log-out-outline" size={40}
          onPress={ () => {
            navigation.navigate("LoginScreen")
          }}
         />}
      />
      <ImageBackground resizeMode="cover" style={styles.image}>
        <View style={styles.receivePadding}>
          {itemList}
          <View style={styles.bgYellow}>
            <View style={styles.widthEnd}>
              <Text style={styles.receiveHeaderText}>
                ยอดรวม ฿{price}
              </Text>
            </View>
          </View>
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
    width: 230,
  },
});

export default PharmacistUserDataScreen;
