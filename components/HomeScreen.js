import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Picker
} from 'react-native';
import {
	Button
} from 'react-native-elements';
import MapView from 'react-native-maps';

class HomeScreen extends Component {
constructor() {
  super()
    this.state = {
      location: 'default',
      //default CMU region
      region: {
        latitude: 40.4441342,
        longitude: -79.942818,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    }

    //I'm not too sure which actually need to be binded and which are redundant    
    this.onRegionChange = this.onRegionChange.bind(this)
    this.onMarkerPress = this.onMarkerPress.bind(this)
    this.updateState = this.updateState.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
  }

  updateLocation(value) {
    this.setState({location:value})

    //update map
    let newLocation = autocompleteData.filter((data) => {
      return (
        data.value === value
      )
    })
    this.onRegionChange(newLocation[0].region)

    //update markers?

  }

  updateState(value) {
    console.log(value)
    this.setState({location:value})
  }

  onRegionChange(region) {
    this.setState({region});
  }

  onMarkerPress(e, value) {
    //updates the location in the picker after a delay. 
    //This strange hack allows the animation to finish first
    setTimeout(this.updateLocation,500,value)
  }

  render() {
    const { region } = this.props;
    const { navigate } = this.props.navigation;

    let locationList = autocompleteData.map((data) => {
      return (
        <Picker.Item key={'picker-item-'+data.value} label={data.locationName} value={data.value} />
      )
    });

    let markerList = autocompleteData.map((data) => {
      return (
        <MapView.Marker
          key={'marker-'+data.value}
          coordinate={{latitude:data.region.latitude,longitude:data.region.longitude}}
          title={data.locationName}
          description={data.description}
          onPress={(e) => this.onMarkerPress(e, data.value)}
        />
      )
    });

    return (

      <View style ={styles.container}>
        
        <MapView
          style={styles.map}
          region={this.state.region}
          customMapStyle={mapStyle}
        >
          {markerList}
        </MapView>     
        <View style={styles.overlay}> 
          <View style={styles.selection_overlay}>
            <Picker            
              selectedValue={this.state.location}
              onValueChange={(itemValue) => this.updateLocation(itemValue)}
              mode='dropdown'
              >            
              {locationList}            
            </Picker>
          </View>
          <View style={styles.buttons_overlay}>
            <Button 
              title="BUY A BLOCK" 
              backgroundColor="#00b587"
              raised
              large
              onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
            <Button 
              title="SELL A BLOCK" 
              backgroundColor="#ffc700"
              raised
              large
              onPress={f=>f}/>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
//export default MainMenu;

/*class Screen1 extends Component {
	render() {
		return(
			<Text>Something</Text>
		);
	}
}

const MainMenu = DrawerNavigator({
	screen1: {screen: HomeScreen},
	screen2: {screen: HomeScreen},
	screen3: {screen: HomeScreen},
	},
	{
	navigationOptions: {
		headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>	
	}
	
})*/

const styles = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  overlay: {     
    height: Dimensions.get('window').height,    
    justifyContent: 'space-between'    
  },
  selection_overlay: { 
    flex: 0,    
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  buttons_overlay: { 
    flex: 0,    
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
    padding: 5
  },
  picker: {
    flex: 0,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const autocompleteData = [
  {
    locationName:"iNoodle", 
    value:"inoodle",
    region: {
      latitude: 40.4433854,
      longitude: -79.9477742,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    description: "The best place in the world for asian food"
  },
  {
    locationName:"Au Bon Pain", 
    value:"abp",
    region: {
      latitude: 40.4440982,
      longitude: -79.9443414,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    description: "We sell sandwiches and coffee"
  },
  {
    locationName:"Exchange",
    value:"exchange",
    region: {
      latitude: 40.4412224,
      longitude: -79.9443474,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    description: "Tepper"
  },
  {
    locationName:"Resnik Cafe",
    value:"resnikcafe",
    region: {
      latitude: 40.4424393,
      longitude: -79.9418867,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    description: "Resnik Cafe"
  }
]

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]