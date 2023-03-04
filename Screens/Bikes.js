import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bikes = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <ScrollView> */}
      <View>
        <Image
          source={require("../Image/Vector1.png")}
          style={{
            height: "15%",
            width: "30%",
            position: "relative",
            left: "70%",
          }}
        />
        <Text style={styles.proilename}>
          Hello{" "}
          <Text style={{ fontWeight: "bold" }}>
            {"\n"}
            Awais
          </Text>
          {/* <Icon name="rocket" size={20} color = "#000"  /> */}
        </Text>
        <View style={styles.SectionStyle}>
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
        </View>
        <Text style={styles.services}>Services</Text>
        <View style={styles.cars}>
          <Text
            onPress={() => navigation.navigate("Home")}
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
        <View style={styles.images}>
          <View style={styles.img1}>
            <Image
              source={require("../Image/basic2.png")}
              style={{
                marginLeft: 10,
                marginTop: 2,
              }}
            />
          </View>
          <View style={styles.img1}>
            <Image
              source={require("../Image/basic3.png")}
              style={{ marginTop: 15, marginLeft: 25 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text
            onPress={() => navigation.navigate("BikeBooking")}
            style={styles.h3}
          >
            Basic{" "}
            <Text style={{ fontWeight: "normal", textAlign: "center" }}>
              {" "}
              {"\n"}Mechanic Name
            </Text>
          </Text>
          <Text
            onPress={() => navigation.navigate("BikeBooking1")}
            style={styles.h4}
          >
            Mid Range{" "}
            <Text style={{ fontWeight: "normal", textAlign: "center" }}>
              {" "}
              {"\n"}Mechanic Name
            </Text>
          </Text>
        </View>

        <Text style={styles.services}>Store</Text>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Image
              style={{ height: 50 }}
              source={require("../Image/chain.png")}
            />

            <Image source={require("../Image/Biketire.png")} />
            <Image source={require("../Image/filter1.png")} />
            <Image source={require("../Image/caorborator.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text onPress={() => navigation.navigate("Sprocket")}>
              Sprocket
            </Text>
            <Text onPress={() => navigation.navigate("Tyre_1")}>Tyres</Text>
            <Text onPress={() => navigation.navigate("OilFilter")}>
              Oil filter
            </Text>
            <Text onPress={() => navigation.navigate("Carborator")}>
              Carborator
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <Image source={require("../Image/bikeplug.png")} />
            <Image source={require("../Image/brakes1.png")} />
            <Image source={require("../Image/battery1.png")} />
            <Image source={require("../Image/airfilter1.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text onPress={() => navigation.navigate("SparkPlug")}>
              Spark Plug
            </Text>
            <Text onPress={() => navigation.navigate("Brakes")}>Brakes</Text>
            <Text onPress={() => navigation.navigate("Battery")}>Battery</Text>
            <Text onPress={() => navigation.navigate("Airfilter")}>
              Airfilter
            </Text>
          </View>
        </View>
      </View>

      {/* </ScrollView> */}
      {/* <BottamBar/> */}
    </SafeAreaView>
  );
};
export default Bikes;
const styles = StyleSheet.create({
  proilename: {
    textAlign: "center",
    color: "black",
    fontFamily: "Roboto",
  },
  cars: {
    justifyContent: "space-around",
    flexDirection: "row",
    color: "#000",
  },
  h3: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
    marginLeft: 6,
    height: 60,
    width: 140,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    textAlign: "center",
    fontWeight: "700",
    color: "#000",
  },
  h4: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
    height: 60,
    width: 140,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    textAlign: "center",
    fontWeight: "700",
    color: "#000",
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  services: {
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 5,
  },

  SectionStyle: {
    flexDirection: "row",
    height: 50,
    // marginTop: ,
    marginLeft: 35,
    marginRight: 35,
    // margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#dadae8",
  },
  img1: {
    height: 120,
    width: 130,
    backgroundColor: "#4BC500",
    // display:'flex',
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
  },
});
