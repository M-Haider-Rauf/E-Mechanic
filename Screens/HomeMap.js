import { Image, Text } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { SafeAreaView } from "react-native-safe-area-context";


const HomeMap = (props) => {

  const cars = [
    {
      id: '1',
      latitude: 28.456312,
      longitude: -16.252929,
    },
    {
      id: '2',
      latitude: 28.456208,
      longitude: -16.259098,
    },
    {
      id: '3',
      latitude: 28.454812,
      longitude:-16.258658,
    },
  ];

  const markers = cars.map((car) => (
    <Marker
      key={car.id}
      coordinate={{latitude: car.latitude, longitude: car.longitude}}
      
    >
      <Text>Shop# {car.id}</Text>
      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
        source={require('../Image/Vector8.png')}
      />
    </Marker>
  ));

  markers.push(
    <Marker
      key={999}
      coordinate={{latitude: props.originPlace.latitude, longitude: props.originPlace.longitude}}
      
    >
      <Text>To</Text>
      <Image
        style={{
          width: 30,
          height: 30,
          resizeMode: 'contain',
        }}
        source={require('../Image/Vector2.png')}
      />
    </Marker>

  )

  return (
    <SafeAreaView>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        region={props.originPlace}
        >
        {markers}
      </MapView>
    </SafeAreaView>
  );
};

export default HomeMap;