import { View, StyleSheet, Text, Image, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

import { getAuth, signOut } from "firebase/auth";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MaterialIcons } from "react-native-vector-icons";
import { CartIcon } from "../Components/CartIcon";

const HomeScreen = ({ navigation }) => {
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Log out?",
          "You will be logged out of your account and have to log back in!",
          [
            { text: "Stay", style: "cancel", onPress: () => {} },
            {
              text: "Log Out",
              style: "destructive",
              onPress: () => {
                signOut(getAuth());
                console.log("Signed Out!");
                navigation.dispatch(e.data.action);
              },
            },
          ]
        );
      }),
    []
  );

  const auth = getAuth();
  const user = auth.currentUser;

  const displayName = user ? user.displayName : "N/AA";

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      {/* <ScrollView> */}
      <View>
        <Pressable
          onPress={() => navigation.navigate("ProfileScreen")}
          style={{ width: 100, height: 100, position: "absolute" }}
        >
          {user.photoURL ? (
            <Image source={{ uri: user.photoURL }} style={styles.avatar} />
          ) : (
            <MaterialIcons
              name="person"
              color="#4BC500"
              size={100}
              style={styles.avatar}
            />
          )}
        </Pressable>

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
          Hello <Text style={{ fontWeight: "bold" }}>{displayName}</Text>
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
        <Text style={styles.services}>Services</Text>
        <View style={styles.cars}>
          <Text style={{ fontWeight: "800", color: "#000" }}>Car Offers</Text>
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
              source={require("../Image/Vector4.png")}
              style={{ marginLeft: 0, marginTop: 10 }}
              onPress={() => navigation.navigate("Basic")}
            />
            <Image
              source={require("../Image/Vector2.png")}
              style={{
                marginRight: 10,
                marginTop: 40,
              }}
            />
          </View>
          <View style={styles.img1}>
            <Image
              source={require("../Image/Vector3.png")}
              style={{ marginTop: 30, marginLeft: 10 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text onPress={() => navigation.navigate("Basic")} style={styles.h3}>
            Basic{" "}
            <Text style={{ fontWeight: "normal", textAlign: "center" }}>
              {" "}
              {"\n"}Mechanic Name
            </Text>
          </Text>
          <Text
            onPress={() => navigation.navigate("MidRange")}
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
            <Image source={require("../Image/oil1.png")} />

            <Image source={require("../Image/tire1.png")} />
            <Image source={require("../Image/filter1.png")} />
            <Image source={require("../Image/brakes1.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text onPress={() => navigation.navigate("AntiFreeze")}>
              Antifreeze
            </Text>
            <Text onPress={() => navigation.navigate("Tyre")}>Tyres</Text>
            <Text onPress={() => navigation.navigate("OilFilter")}>
              Oil filter
            </Text>
            <Text onPress={() => navigation.navigate("Brakes")}>Brakes</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <Image source={require("../Image/wheels1.png")} />
            <Image source={require("../Image/battery1.png")} />
            <Image source={require("../Image/blades1.png")} />
            <Image source={require("../Image/airfilter1.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text onPress={() => navigation.navigate("Allignment")}>
              Allignments
            </Text>
            <Text onPress={() => navigation.navigate("Battery")}>Battery</Text>
            <Text onPress={() => navigation.navigate("Blades")}>Blades</Text>
            <Text onPress={() => navigation.navigate("Airfilter")}>
              Airfilter
            </Text>
          </View>
        </View>
      </View>
      <CartIcon navigation={navigation} />

      {/* </ScrollView> */}
      {/* <BottamBar/> */}
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
  },
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
    height: 45,
    // marginTop: ,
    marginLeft: 35,
    marginRight: 35,
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
