import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

const UserLoginComponent = (props) => {

  const [Arr, setArr] = React.useState();

  const [InputId, setInputId] = React.useState("1104500023175");
  const [InputPass, setInputPass] = React.useState("pkcg2032Z1");

  const [Id, setId] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Surname, setSurname] = React.useState("");
  const [ArrApp, setArrApp] = React.useState();

  React.useEffect(() => {

    const unsub = onSnapshot(collection(db, "UserInfo"), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({...doc.data(), uid: doc.id});
      });
      setArr(arr);
      setId(arr[0].hnid);
      setName(arr[0].name);
      setSurname(arr[0].surname);
    });
    return () => {
      unsub();
    };
  }, []);

  React.useEffect(() => {

    const unsub = onSnapshot(collection(db, "UserAppointment"), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({...doc.data(), uid: doc.id});
      });
      setArrApp(arr);
    });
    return () => {
      unsub();
    };
  }, []);

  function checkNext() {
    var CheckPass, CheckId, CheckName, CheckSur
    for (var i=0; i<Arr.length; i++) {
      if (InputId == Arr[i].id) {
        CheckPass = Arr[i].password
        CheckId = Arr[i].id
        CheckName = Arr[i].name
        CheckSur = Arr[i].surname
      }
    }
    if(CheckPass == InputPass) {
      props.navigator.navigate("UserHomeScreen", {id: CheckId, name: CheckName, surname: CheckSur, arr: ArrApp})
    } else {
      setInputId("รหัสไม่ถูกต้อง")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <Text style={styles.label}>
          รหัสผู้ป่วย HN
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"ใส่รหัสบัตรประชาชน"}
          onChangeText={(x) => setInputId(x)}
          value={InputId}
          keyboardType="default"
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
          onChangeText={(x) => setInputPass(x)}
          value={InputPass}
        />
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
            เข้าสู่ระบบ
          </Text>
        </TouchableOpacity>
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
    fontSize: "15px",
  },
  input: {
    fontFamily: "Kanit",
    fontSize: "15px",
    borderColor: "#000000",
    borderWidth: "1px",
    borderRadius: "30px",
    paddingHorizontal: "30px",
    paddingVertical: "10px",
  },
  bLogin: {
    backgroundColor: "#000000",
    borderRadius: "30px",
    paddingVertical: "10px",
    paddingHorizontal: "90px",
  },
  bTextLogin: {
    fontFamily: "Kanit",
    fontSize: "20px",
    color: "#ffffff",
  }
});

export default UserLoginComponent;
