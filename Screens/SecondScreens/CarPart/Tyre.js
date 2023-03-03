import {
  View,
  TextView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import { addToCart } from "../../../util";

const Tyre = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FontAwesome5
          onPress={() => navigation.navigate("Home")}
          name={"long-arrow-alt-left"}
          size={30}
          style={{ marginLeft: 20, marginTop: 30, color: "#000" }}
        />

        <Image
          source={require("../../../Image/Vector1.png")}
          style={{
            // height: "35%",
            // width: "30%",
            position: "relative",
            left: "70%",
            top: "-33%",
          }}
        />
      </View>
      <View style={styles.b_p}>
        <Image source={require("../../../Image/tire_1.png")} />
      </View>
      <View style={styles.b_p}>
        <Text style={{ marginTop: 15 }}>Tyres</Text>

        <Text
          style={{
            backgroundColor: "#4BC500",
            width: 70,
            textAlign: "center",
            height: 30,
            borderRadius: 5,
            marginTop: 15,
          }}
        >
          RS.25000
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("BookingForm")}
        style={styles.buttonStyle}
        activeOpacity={0.5}
      >
        <Text
          onPress={() => navigation.navigate("BookingForm")}
          style={styles.buttonTextStyle}
        >
          You Want to Replace It
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Booking")}
        style={styles.buttonStyle_1}
        activeOpacity={0.5}
      >
        <Text
          onPress={() => addToCart('Tyre (Car)')}
          style={styles.buttonTextStyle_1}
        >
          Add to cart
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Tyre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  b_p: {
    alignContent: "space-between",

    // flexDirection: "column",
    alignSelf: "center",
  },
  buttonStyle: {
    backgroundColor: "#4BC500",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 50,
    alignItems: "center",
    borderRadius: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "900",
  },
  buttonStyle_1: {
    backgroundColor: "#fff",
    borderWidth: 2,
    color: "#FFFFFF",
    borderColor: "#000",
    height: 50,
    alignItems: "center",
    borderRadius: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 25,
  },
  buttonTextStyle_1: {
    color: "#000",
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "900",
  },
});
