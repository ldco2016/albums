// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// ES6 Class Component
class AlbumList extends Component {
  // initializing component level state
  // to get access to data and rerender
  // this.state.albums equal to empty array
  state = { albums: [] };

  // lifecycle method to
  // fetch data as soon as app boots up
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      // called once http request is complete with response and data
      // inside object in chrome console dictated use of response.data
      // passing albums object to setState because updating state
      // this.state.albums no longer equal to empty array
      // setState need not be defined, comes with Component class
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    // result of adding state code
    console.log(this.state);

    return (
      <View>
        <Text>
          {this.renderAlbums()}
        </Text>
      </View>
    );
  }
}

// Make the component available to other parts of the app
export default AlbumList;
