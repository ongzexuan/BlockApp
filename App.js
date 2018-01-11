/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
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
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import TestComponent from './components/TestComponent'

class Main extends Component {
  render() {
    return(
      <HomeScreen />
    );
  }
}

/*class HomeScreen extends Component {
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

    //update marker

  }

  updateState(value) {
    console.log(value)
    this.setState({location:value})
  }

  onRegionChange(region) {
    this.setState({region});
  }

  /*onMarkerPresss(coordinate, position) {
    console.log("marker pressed!")
    console.log(coordinate)
    let newLocation = autocompleteData.filter((data) => {
      return (
        data.region.latitude === coordinate.latitude &&
        data.region.longitude === coordinate.longitude
      )
    })    
    
    this.updateLocation(newLocation.value)
  }*/

 /* onMarkerPress(e, value) {
    //console.log("Marker Pressed!")
    //setTimeout(
    //  () => {this.setState,500,{location:value}})
    setTimeout(this.updateLocation,500,value)

    //this.setState({location:value})
    //this.updateLocation(value)
  }

  render() {
    const { region } = this.props;

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
          //there should be a neater place to put the binding
          //onRegionChange={() => this.onRegionChange.bind(this)}          
          //onRegionChange={this.onRegionChange}
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
              onPress={f=>f}/>
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
}*/

const BlockApp = StackNavigator({
  Home: {     
    screen: Main 
  }
},
//some strange hack to remove the headaer
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
export default BlockApp;

AppRegistry.registerComponent('BlockApp', () => BlockApp);

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


