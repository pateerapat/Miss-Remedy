import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { addUser } from "../firebase";

const UserInputComponent = (props) => {

  const [Name, setName] = React.useState("ธีรภัทร");
  const [Surname, setSurname] = React.useState("อักษรสารสิทธิ์");
  const [Id, setId] = React.useState("1104500023175");
  const [Address, setAddress] = React.useState("4 รามคำแหง 118");
  const [Hospital, setHospital] = React.useState("โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร");
  const [HnId, setHnId] = React.useState("77170024");
  const [Password, setPassword] = React.useState("pkcg2032Z1");
  const [Alert, setAlert] = React.useState("");

  function checkNext() {
    if(Name != "" && Surname != "" && Id != "" && Address != "" && Hospital != "" && HnId != "" && Password != "") {
      addUser(HnId, Password, Id, Name, Surname, Hospital, Address)
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
            โรงพยาบาล
          </Text>
          <TextInput
            style={styles.inputFull}
            placeholder={"ใส่โรงพยาบาล"}
            onChangeText={(x) => setHospital(x)}
            value={Hospital}
          />
        </View>
      </View>
      <View style={styles.columnGrid}>
        <View style={styles.separator}>
          <Text style={styles.label}>
            รหัสผู้ป่วย HN
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"ใส่รหัสผู้ป่วย HN"}
            onChangeText={(x) => setHnId(x)}
            value={HnId}
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
  },
  alert: {
    fontFamily: "Kanit",
    fontSize: "15px",
    color: "red",
  }
});

export default UserInputComponent;