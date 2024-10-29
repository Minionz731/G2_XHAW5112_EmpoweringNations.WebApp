import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { UrlTile, Marker } from 'react-native-maps';

export default function App() {

    const markers = [
        {
          id: 1,
          title: 'Downtown Learning Center',
          description: 'A hub for technology and business courses in the heart of the city.',
          latitude: 37.7749,
          longitude: -122.4194,
        },
        {
          id: 2,
          title: 'Nations',
          description: 'Short and Long courses',
          latitude: 37.7849,
          longitude: -122.4094,
        },
        {
          id: 3,
          title: 'Nations',
          description: 'Short and Long courses',
          latitude: 37.7949,
          longitude: -122.4294,
        },
        {
          id: 4,
          title: 'Nations',
          description: 'Short and Long courses',
          latitude: 37.7649,
          longitude: -122.4394,
        },
        {
          id: 5,
          title: 'Nations',
          description: 'Short and Long courses',
          latitude: 37.7549,
          longitude: -122.4494,
        },
      ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.044,
          longitudeDelta: 0.05,
        }}
      >
        <UrlTile
          urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />
          {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin : 20,
   
    
  },
  map: {
    width: '100%',
    height: '90%',
  },
});
