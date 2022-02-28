import React from "react";
import { View, StyleSheet, Text, Switch, Alert } from "react-native";

export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

  return {
    time,
  };
};

const UserNotificationComponent = (props) => {

  var a = useDate()

  const [isEnabled01, setIsEnabled01] = React.useState(false);
  const toggleSwitch01 = () => setIsEnabled01(previousState => !previousState);
  const [isEnabled02, setIsEnabled02] = React.useState(false);
  const toggleSwitch02 = () => setIsEnabled02(previousState => !previousState);
  const [isEnabled03, setIsEnabled03] = React.useState(false);
  const toggleSwitch03 = () => setIsEnabled03(previousState => !previousState);
  const [isEnabled04, setIsEnabled04] = React.useState(false);
  const toggleSwitch04 = () => setIsEnabled04(previousState => !previousState);

  if (a.time == "8:00 AM" && isEnabled01) {
    Alert.alert("แจ้งเตือน", "ทานยาช่วงเช้า", [
      {text: "ตกลง", onPress: () => console.log('alert closed')}
    ])
  }
  if (a.time == "12:00 PM" && isEnabled02) {
    Alert.alert("แจ้งเตือน", "ทานยาช่วงบ่าย", [
      {text: "ตกลง", onPress: () => console.log('alert closed')}
    ])
  }
  if (a.time == "5:00 PM" && isEnabled03) {
    Alert.alert("แจ้งเตือน", "ทานยาช่วงเย็น", [
      {text: "ตกลง", onPress: () => console.log('alert closed')}
    ])
  }
  if (a.time == "10:00 PM" && isEnabled04) {
    Alert.alert("แจ้งเตือน", "ทานยาก่อนนอน", [
      {text: "ตกลง", onPress: () => console.log('alert closed')}
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.bgYellow}>
        <View style={styles.widthEnd}>
          <Text style={styles.textTitleFont}>เช้า</Text>
          <Text style={styles.textFont}>08:00</Text>
        </View>
        <Switch
          trackColor={{ false: "#ffffff", true: "#75BB43" }}
          thumbColor={isEnabled01 ? "#75BB43" : "#ffffff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch01}
          value={isEnabled01}
        />
      </View>
      <View style={styles.bgYellow}>
        <View style={styles.widthEnd}>
          <Text style={styles.textTitleFont}>กลางวัน</Text>
          <Text style={styles.textFont}>12:00</Text>
        </View>
        <Switch
          trackColor={{ false: "#ffffff", true: "#75BB43" }}
          thumbColor={isEnabled02 ? "#75BB43" : "#ffffff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch02}
          value={isEnabled02}
        />
      </View>
      <View style={styles.bgYellow}>
        <View style={styles.widthEnd}>
          <Text style={styles.textTitleFont}>เย็น</Text>
          <Text style={styles.textFont}>17:00</Text>
        </View>
        <Switch
          trackColor={{ false: "#ffffff", true: "#75BB43" }}
          thumbColor={isEnabled03 ? "#75BB43" : "#ffffff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch03}
          value={isEnabled03}
        />
      </View>
      <View style={styles.bgYellow}>
        <View style={styles.widthEnd}>
          <Text style={styles.textTitleFont}>ก่อนนอน</Text>
          <Text style={styles.textFont}>22:00</Text>
        </View>
        <Switch
          trackColor={{ false: "#ffffff", true: "#75BB43" }}
          thumbColor={isEnabled04 ? "#75BB43" : "#ffffff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch04}
          value={isEnabled04}
        />
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
  bgYellow: {
    backgroundColor: "#FFC63C",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "10px",
    flexDirection: "row",
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

export default UserNotificationComponent;
