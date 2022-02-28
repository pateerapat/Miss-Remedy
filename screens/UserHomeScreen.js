import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "react-native-elements";

import UserNotificationComponent from "../components/UserNotificationComponent";
import UserReceiveComponent from "../components/UserReceiveComponent";
import UserAppointmentComponent from "../components/UserAppointmentComponent";

const bg = { uri : "https://i.ibb.co/f4TdQnk/bg1.png" };
const image = { uri : "https://i.ibb.co/vsxjxgB/image.png" };
const icon01 = { uri : "https://i.ibb.co/7JP20zP/appointmentf.png" };
const icon02 = { uri : "https://i.ibb.co/nzTMKy8/receivef.png" };
const icon03 = { uri : "https://i.ibb.co/0sXq987/notificationf.png" };

const UserHomeScreen = ({route, navigation}) => {

  var isView = 0;

  // { route.params.username }
  var [ UserHeader, setUserHeader ] =
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
            คุณ {route.params.name} {route.params.surname}
          </Text>
          <Text style={styles.miniDataText}>
            หมอประจำตัว | -
          </Text>
          <Text style={styles.miniDataText}>
            HN. {route.params.id}
          </Text>
        </View>
      </View>
    </View>
  );

  var [ ToggleButton, setToggleButton ] =
  React.useState(
    <View>
      <View style={styles.byRowIcon}>
      <TouchableOpacity
        style={styles.iconPadding}
        onPress={ () => {
          changeToAppointment()
        }}
        >
        <Image
          style={styles.icon}
          source={icon01}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconPadding}
        onPress={ () => {
          changeToReceive()
        }}
        >
          <Image
            style={styles.iconOpaque}
            source={icon02}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.iconPadding}
          onPress={ () => {
            changeToNotification()
          }}
        >
          <Image
            style={styles.iconOpaque}
            source={icon03}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  var [ SelectedComponent, setSelectedComponent ] =
  React.useState(
    <UserAppointmentComponent />
  );

  function changeToAppointment() {
    if (isView != 0) {
      isView = 0;
      setToggleButton(
        <View style={styles.byRowIcon}>
          <TouchableOpacity
            style={styles.iconPadding}
            onPress={ () => {
              changeToAppointment()
            }}
            >
            <Image
              style={styles.icon}
              source={icon01}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconPadding}
            onPress={ () => {
              changeToReceive()
            }}
            >
            <Image
              style={styles.iconOpaque}
              source={icon02}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconPadding}
            onPress={ () => {
              changeToNotification()
            }}
          >
            <Image
              style={styles.iconOpaque}
              source={icon03}
            />
          </TouchableOpacity>
        </View>
      );
      setSelectedComponent(
        <UserAppointmentComponent />
      );
    }
  }

  function changeToReceive() {
    if (isView != 1) {
      isView = 1;
      setToggleButton(
        <View style={styles.byRowIcon}>
          <TouchableOpacity
            style={styles.iconPadding}
            onPress={ () => {
              changeToAppointment()
            }}
            >
            <Image
              style={styles.iconOpaque}
              source={icon01}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconPadding}
            onPress={ () => {
              changeToReceive()
            }}
            >
            <Image
              style={styles.icon}
              source={icon02}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconPadding}
            onPress={ () => {
              changeToNotification()
            }}
          >
            <Image
              style={styles.iconOpaque}
              source={icon03}
            />
          </TouchableOpacity>
        </View>
      );
      setSelectedComponent(
        <UserReceiveComponent navigator={navigation} router={route}/>
      );
    }
  }

  function changeToNotification() {
    if (isView != 2) {
      isView = 2;
      setToggleButton(
        <View style={styles.byRowIcon}>
          <TouchableOpacity
            style={styles.iconPadding}
            onPress={ () => {
              changeToAppointment()
            }}
            >
            <Image
              style={styles.iconOpaque}
              source={icon01}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconPadding}
            onPress={ () => {
              changeToReceive()
            }}
            >
            <Image
              style={styles.iconOpaque}
              source={icon02}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconPadding}
            onPress={ () => {
              changeToNotification()
            }}
          >
            <Image
              style={styles.icon}
              source={icon03}
            />
          </TouchableOpacity>
        </View>
      );
      setSelectedComponent(
        <View style={styles.componentStyle}>
          <Text style={styles.titleComponent}>
            แจ้งเตือนการทานยา
          </Text>
          <View style={styles.receivePadding}>
            <UserNotificationComponent />
          </View>
        </View>
      );
    }
  }

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
          { UserHeader }
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
});

export default UserHomeScreen;
