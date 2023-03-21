import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "react-native-vector-icons";

const Emechanic = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Image
          source={require("../Image/Vector1.png")}
          style={{
            height: "23%",
            width: "30%",
            position: "relative",
            left: "70%",
          }}
        />
        <Text style={styles.proilename}>
          Hello, <Text style={{ fontWeight: "bold" }}>Awais</Text>
          {/* <Icon name="rocket" size={20} color = "#000"  /> */}
        </Text>
        <View style={styles.SectionStyle}>
          <MaterialIcons
            style={styles.searchIcon}
            name="search"
            color="#000000"
            size={30}
            marginBottom="5%"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search Services"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="ascii-capable"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <MaterialIcons
            style={styles.micIcon}
            name="mic"
            color="#000000"
            size={30}
            marginBottom="5%"
            marginLeft="10%"
          />
        </View>

        <Text style={styles.h1}>Services</Text>

        <View style={styles.cars}>
          <Text
            onPress={() => navigation.navigate("HomeScreen")}
            style={{ fontWeight: "800", color: "#000" }}
          >
            Car Offers
          </Text>
          <Text
            onPress={() => navigation.navigate("Bikes")}
            style={{ fontWeight: "800", color: "#000" }}
          >
            {" "}
            Bike Offers
          </Text>
          <Text
            onPress={() => navigation.navigate("Emechanic")}
            style={{ fontWeight: "800", color: "#000" }}
          >
            E-Mechanic
          </Text>
        </View>
        <View style={styles.box}>
          <View style={styles.h2}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Electronic Mechanic
            </Text>
            <Text style={{ fontSize: 13 }}>
              For emergency basis you can try our instant E-mechanic service at
              your location.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Booking")}
              style={styles.buttonStyle}
              activeOpacity={0.5}
            >
              <Text
                onPress={() => navigation.navigate("Booking")}
                style={styles.buttonTextStyle}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Vehical}>
            <Image source={require("../Image/Car.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Emechanic;

//

const styles = StyleSheet.create({
  proilename: {
    textAlign: "center",
    fontFamily: "Roboto",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    bottom: 7,
    zIndex: 1,
  },
  micIcon: {
    position: "absolute",
    right: 10,
    bottom: 7,
    zIndex: 1,
  },
  SectionStyle: {
    flexDirection: "row",
    height: 45,
    // marginTop: ,
    marginLeft: 25,
    marginRight: 25,
    // zIndex: 9,
    // margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    backgroundColor: "#f3f3f3",
    paddingLeft: 40,
    paddingRight: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#dadae8",
    // opacity: 0.6,
  },
  cars: {
    justifyContent: "space-around",
    flexDirection: "row",
    color: "#000",
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 23,
    marginTop: 5,
    marginBottom: 10,
  },
  box: {
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "90%",
    borderRadius: 4,
    marginTop: 15,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  h2: {
    width: "50%",
    // textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#4BC500",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 30,
    alignItems: "center",
    borderRadius: 15,
    // marginLeft: 20,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 5,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  Vehical: {
    marginTop: 30,
  },
});
