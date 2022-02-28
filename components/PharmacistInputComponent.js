import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { addPharmacist, db } from "../firebase";
import { doc, onSnapshot, collection } from "firebase/firestore";

const PharmacistInputComponent = (props) => {

  const [Name, setName] = React.useState("ธิติวุธ");
  const [Surname, setSurname] = React.useState("สุขอารมย์");
  const [Id, setId] = React.useState("1104300310871");
  const [Address, setAddress] = React.useState("32 อารีย์สัมพันธ์ 7");
  const [PharId, setPharId] = React.useState("54763918");
  const [Password, setPassword] = React.useState("antsmile2000");
  const [ShopName, setShopName] = React.useState("ร้านยากรุงเทพ");
  const [Alert, setAlert] = React.useState("");

  function checkNext() {
    if(Name != "" && Surname != "" && Id != "" && Address != "" && PharId != "" && Password != "" && ShopName != "") {
      addPharmacist(PharId, Password, Id, Name, Surname, Address, ShopName)
      props.navigator.navigate("LoginScreen")
    } else {
      setAlert("โปรดใส่ข้อมูลให้ครบ")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.columnGrid}>
        <View style={styles.separator}>
          <Text style={styles.label}>
            ชื่อ
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"ใส่ชื่อ"}
            onChangeText={(x) => setName(x)}
            value={Name}
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>
            นามสกุล
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"ใส่นามสกุล"}
            onChangeText={(x) => setSurname(x)}
            value={Surname}
          />
        </View>
      </View>
      <View style={styles.columnGrid}>
        <View style={styles.separator}>
          <Text style={styles.label}>
            เลขบัตรประจำตัวประชาชน
          </Text>
          <TextInput
            style={styles.inputFull}
            placeholder={"ใส่เลขบัตรประจำตัวประชาชน"}
            onChangeText={(x) => setId(x)}
            value={Id}
          />
        </View>
      </View>
      <View style={styles.columnGrid}>
        <View style={styles.separator}>
          <Text style={styles.label}>
            ที่อยู่
          </Text>
          <TextInput
            style={styles.inputFull}
            placeholder={"ใส่ที่อยู่"}
            onChangeText={(x) => setAddress(x)}
            value={Address}
          />
        </View>
      </View>
      <View style={styles.columnGrid}>
        <View style={styles.separator}>
          <Text style={styles.label}>
          เลขที่ใบอนุญาติ
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"ใส่เลขที่ใบอนุญาติ"}
            onChangeText={(x) => setPharId(x)}
            value={PharId}
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.label}>
            รหัสผ่าน
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"ใส่รหัสผ่าน"}
            secureTextEntry={true}
            onChangeText={(x) => setPassword(x)}
            value={Password}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.bLogin}
          onPress={ () => {
            checkNext()
          }}
        >
          <Text
            style={styles.bTextLogin}
          >
            ยืนยัน
          </Text>
        </TouchableOpacity>
        <Text style={styles.alert}>
          {Alert}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "20px",
      },
      separator: {
        paddingBottom: "20px",
      },
      label: {
        paddingLeft: "20px",
        fontFamily: "Kanit",
        fontSize: "12px",
      },
      input: {
        fontFamily: "Kanit",
        fontSize: "12px",
        borderColor: "#000000",
        borderWidth: "1px",
        borderRadius: "30px",
        paddingVertical: "7px",
        width: "150px",
        marginHorizontal: "10px",
        paddingHorizontal: "10px",
      },
      inputFull: {
        fontFamily: "Kanit",
        fontSize: "12px",
        borderColor: "#000000",
        borderWidth: "1px",
        borderRadius: "30px",
        paddingVertical: "7px",
        width: "320px",
        marginHorizontal: "10px",
        paddingHorizontal: "10px",
      },
      columnGrid: {
        flexDirection: "row",
      },
      bLogin: {
        backgroundColor: "#FFC63C",
        borderRadius: "30px",
        paddingVertical: "10px",
      },
      bTextLogin: {
        fontFamily: "Kanit",
        fontSize: "20px",
        color: "#ffffff",
        textAlign: "center",
      }
});

export default PharmacistInputComponent;