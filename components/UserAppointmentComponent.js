import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const UserAppointmentComponent = (props) => {

  const calendar = { uri : "https://i.ibb.co/TvhYsHt/icon-Template.png" };

  return (
    <View style={styles.componentStyle}>
          <Text style={styles.titleComponent}>
            นัดหมายตรวจ
          </Text>
          <Image
            style={styles.calendar}
            source={calendar}
          />
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

export default UserAppointmentComponent;