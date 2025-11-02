import React from 'react';
import { NitroSwitch } from './NitroSwitch';
import { callback } from 'react-native-nitro-modules';
import { processColor, StyleSheet } from 'react-native';
import type { ISwitchProps } from './types';

const processVariantColor = (color?: string | { on: string; off: string }) => {
  if (!color) return undefined;
  if (typeof color === "string") return processColor(color) as number;
  return {
    on: processColor(color.on) as number,
    off: processColor(color.off) as number,
  };
};

const MaterialSwitch = ({ onValueChange, style, ...props }: ISwitchProps) => {
  return (
    <NitroSwitch 
      {...props} 
      style={[styles.switch, style]} 
      thumbColor={processVariantColor(props.thumbColor)}
      trackColor={processVariantColor(props.trackColor)}
      trackDecorationColor={processVariantColor(props.trackDecorationColor)} 
      onValueChange={callback(onValueChange)} />
  );
};


const styles = StyleSheet.create({
  switch: {
    width: 51,
    height: 31
  }
});

export default MaterialSwitch;