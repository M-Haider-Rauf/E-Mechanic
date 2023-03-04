import React from "react";
import { View, Dimensions, Text} from "react-native";
import { useState } from "react";

import HomeMap from './HomeMap';
import DestinationSearch from "./DestinationSearch";

const MapScreen = () => {
  const [originPlace, setOriginPlace] = useState({
    latitude: 28.450627,
    longitude: -16.263045,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  });
  

  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap originPlace={originPlace}/>
      </View>

      <DestinationSearch originPlace={originPlace} setOriginPlace={setOriginPlace}/>

    </View>
  );
};

export default MapScreen;