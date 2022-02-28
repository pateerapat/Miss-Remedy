import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { SetMedAction } from "../store/actions/RemedyAction";
import { useDispatch } from "react-redux";

const PharmacistLoginComponent = (props) => {

  const dispatch = useDispatch();

  const [Arr, setArr] = React.useState();

  const [InputId, setInputId] = React.useState("54763918");
  const [InputPass, setInputPass] = React.useState("antsmile2000");

  const [Id, setId] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Surname, setSurname] = React.useState("");
  const [ShopName, setShopName] = React.useState("");
  const [ArrApp, setArrApp] = React.useState();
  const [Med, setMed] = React.useState();

  React.useEffect(() => {

    const unsub = onSnapshot(collection(db, "PharmacistInfo"), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({...doc.data(), uid: doc.id});
      });
      setArr(arr);
      setId(arr[0].pharId);
      setName(arr[0].name);
      setSurname(arr[0].surname);
      setShopName(arr[0].shopName);
    });
    return () => {
      unsub();
    };
  }, []);

  React.useEffect(() => {

    const unsub = onSnapshot(collection(db, "PharmacistHospital"), (docs) => {
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

  React.useEffect(() => {

    const unsub = onSnapshot(collection(db, "PharmacistMedInfo"), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push({...doc.data(), uid: doc.id});
      });
      console.log(arr)
      setMed(arr);
    });
    return () => {
      unsub();
    };
  }, []);

  function checkNext() {
    var CheckPass, CheckId, CheckName, CheckSur, CheckShop
    for (var i=0; i<Arr.length; i++) {
      if (InputId == Arr[i].pharId) {
        CheckPass = Arr[i].password
        CheckId = Arr[i].pharId
        CheckName = Arr[i].name
        CheckSur = Arr[i].surname
        CheckShop = Arr[i].shopName
      }
    }
    if(InputPass == CheckPass) {
      dispatch(SetMedAction(Med))
      props.navigator.navigate("PharmacistHomeScreen", {id: CheckId, name: CheckName, surname: CheckSur, shopname: CheckShop, arr: ArrApp, med: Med})
    } else {
      setInputId("รหัสไม่ถูกต้อง")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <Text style={styles.label}>
          เลขที่ใบอนุญาต
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"ใส่เลขที่ใบอนุญาต"}
          onChangeText={(x) => setInputId(x)}
          value={InputId}
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

export default PharmacistLoginComponent;
