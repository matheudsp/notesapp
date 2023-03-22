import React from 'react';
import { View ,StyleSheet} from 'react-native';

import { HoldItem } from 'react-native-hold-menu';



const MenuItems = [
  { text: 'Actions', icon: 'home', isTitle: true, onPress: () => {} },
  { text: 'Action 1', icon: 'edit', onPress: () => {} },
  { text: 'Action 2', icon: 'map-pin', withSeparator: true, onPress: () => {} },
  { text: 'Action 3', icon: 'trash', isDestructive: true, onPress: () => {} },
];  

export default function HoldMenu(){
  return (
    <View style={styles.container}>
      <HoldItem items={MenuItems}>
        <View style={styles.item} />
      </HoldItem>
      <HoldItem items={MenuItems}>
        <View style={styles.item} />
      </HoldItem>
      <HoldItem items={MenuItems} menuAnchorPosition="bottom-right">
        <View style={styles.item} />
      </HoldItem>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        position: 'relative',
        maxWidth: '80%',
        
    },
    item: {
        width: '50%',
        height: '50%',
        paddingVertical: 1,
        borderRadius: 1 * 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
})