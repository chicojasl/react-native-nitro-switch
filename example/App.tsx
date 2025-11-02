import React, { useState } from 'react';
import { View, StyleSheet, processColor, Platform, Text } from 'react-native';
import { Switch } from 'react-native-nitro-switch';

function App(): React.JSX.Element {
  const [value, setValue] = useState(true)
  console.log({ color: processColor("0xff00ff00")});
  
  return (
    <View style={styles.container}>
      <Text>Default</Text>
      <Switch value={value} onValueChange={setValue}/>
      {Platform.OS === "android" ? (
        <>
          <Text>Default (Material)</Text>
          <Switch value={value} design='material' onValueChange={setValue} />
        </>
      ) : null}
      <Text>Custom Colors</Text>
        <Switch value={value}
        onValueChange={setValue}  
        thumbColor={{ on: "red", off: "yellow" }}
        trackColor={{ on: '#2754F5', off: '#27F57D' }}
        />
      {Platform.OS === "android" ? (
        <>
          <Text>Custom Colors (Material)</Text>
          <Switch value={value} 
            design='material' 
            onValueChange={setValue}
            thumbColor={{ on: "red", off: "yellow" }}
            trackDecorationColor={{ on: 'red', off: '#da70d6' }}
            trackColor={{ on: '#2754F5', off: '#27F57D' }}
          />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  view: {
    width: 200,
    height: 200
  }});

export default App;