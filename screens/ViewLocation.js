import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';



export default class ViewLocation extends Component {
   
    render(){
        const { params } = this.props.route.params?this.props.route.params:'No value'
        console.log(params.latitude);
        const latitude = params.latitude;
        const longitude = params.longitude;
        const name = params.name;
        const notes = params.notes;
        return(
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: Number(latitude),
                            longitude: Number(longitude),
                            latitudeDelta: 100,
                            longitudeDelta: 100
                        }}

                    >
                        <Marker
                            coordinate={{ latitude: Number(latitude), longitude: Number(longitude) }}
                        >
                            <Image source={require('../assets/location.png')} style={{ height: 50, width: 50 }} />
                        </Marker>
                    </MapView>
                </View>
                <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Name: {name}</Text>
                            <Text style={styles.infoText}>Notes: {notes}</Text>
                            <Text style={styles.infoText}>Latitude: {latitude}</Text>
                            <Text style={styles.infoText}>Longitude: {longitude}</Text>
                        </View>        
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },

})