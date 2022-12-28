import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {io} from 'socket.io-client';
import Torch from 'react-native-torch';

const App = () => {
  const [light, setLight] = useState(false);

  Torch.switchState(light);

  const socket = io('ws://192.168.1.4:3000');

  // send a message to the server
  //socket.emit('hello from client', true);

  // receive a message from the server
  socket.on('hello from server', (...args) => {
    console.log(args[0]);
    setLight(args[0]);
  });

  return <SafeAreaView />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
