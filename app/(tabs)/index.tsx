import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{
        borderColor: 'gray',
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Ini Milik Kita</Text>
        <Text>Yang Ga suka Pasti Hitler</Text>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/86215416?v=4',
          }}
          style={{
            width: 200,
            height: 200, 
            borderRadius: 100,
            margin: 5
        }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          margin: 5,
        }}
        defaultValue="Raja Iblis"
      />
    </ScrollView>
  );
};

export default App;