import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "react-native-elements";
import { addChat, db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

const PharmacistChatScreen = ({route, navigation}) => {

  const dataSet = route.params.router
  const indexer = route.params.indexer

  const [InputText, setInputText] = React.useState("");
  const [data, setData] = React.useState("");
  const [ Index, setIndex ] = React.useState();

  React.useEffect(() => {
    console.log(indexer)

    const unsub = onSnapshot(collection(db, "UserChat", "1", indexer), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        
        arr.push({...doc.data(), uid: doc.id});
      });
      setData(arr);
      setIndex(arr.length)
    });
    return () => {
      unsub();
    };
  }, []);

  React.useEffect(() => {
    console.log(indexer)

    const unsub = onSnapshot(collection(db, "UserChat", "1", indexer), (docs) => {
      let arr = [];
      docs.forEach((doc) => {
        
        arr.push({...doc.data(), uid: doc.id});
      });
      setData(arr);
      setIndex(arr.length)
    });
    return () => {
      unsub();
    };
  }, []);

  const renderItem = (itemData) => {
    let item = itemData.item
    if(item.type == "u") {
      return(
      <View style={styles.chatBox}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
    } else {
      return(
        <View style={styles.chatBoxP}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )
    }
  }

  function addText() {
    addChat(InputText, Index, indexer, "p")
    setIndex(Index+1)
    setInputText("")
  }

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
        centerComponent={<Text style={styles.headerText}>{route.params.name}</Text>}
        rightComponent={
          <TouchableOpacity
            onPress={ () => {
              navigation.navigate("PharmacistUserDataScreen", {id: dataSet.params.id, name: dataSet.params.name, surname: dataSet.params.surname, arr: dataSet.params.arr, router: dataSet})
            }}
          >
            <Ionicons name="information-circle-outline" size={40}></Ionicons>
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={styles.rightAlign}>
          <FlatList
            data={data}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      <View style={styles.intoRow}>
        <TextInput 
          style={styles.input}
          placeholder={"ข้อความ..."}
          onChangeText={(username) => setInputText(username)}
          value={InputText}
        />
        <TouchableOpacity>
          <Ionicons name="arrow-forward-circle-outline" size={40} onPress={addText}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#ffffff",
  },
  headerText: {
    fontFamily: "Kanit",
    fontSize: "15px",
    fontWeight: "600",
    paddingTop: "7px",
  },
  subHeader: {
    flexDirection: "row",
  },
  input: {
    fontFamily: "Kanit",
    fontSize: "15px",
    borderColor: "#000000",
    borderWidth: "1px",
    borderRadius: "30px",
    paddingHorizontal: "30px",
    width: "310px",
  },
  intoRow: {
    flexDirection: "row",
    alignContent: "center",
    margin: "10px",
  },
  rightAlign: {
    textAlign: "right",
    margin: "20px",
  },
  text: {
    fontFamily: "Kanit",
    fontSize: "15px",
  },
  chatBox: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff",
    paddingHorizontal: "10px",
    paddingVertical: "10px",
    borderRadius: "10px",
    marginBottom: "5px",
  },
  chatBoxP: {
    alignSelf: "flex-end",
    backgroundColor: "#FFC63C",
    paddingHorizontal: "10px",
    paddingVertical: "10px",
    borderRadius: "10px",
    marginBottom: "5px",
  }
});

export default PharmacistChatScreen;
