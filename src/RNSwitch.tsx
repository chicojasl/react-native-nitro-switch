import React, { useMemo } from 'react';
import { Switch } from 'react-native';
import type { ISwitchProps } from './types';


const RNSwitch = ({ trackColor, thumbColor, value, ...props }: ISwitchProps) => {
  const _trackColor = useMemo(() => {
    if (!trackColor) {
      return
    }

    if (typeof trackColor === "string") {
      return { false: trackColor, true: trackColor }
    }

    return { false: trackColor.off, true: trackColor.on }
  }, [trackColor])
  
  const _thumbColor = useMemo(() => {
    if (!thumbColor) {
      return
    }

    if (typeof thumbColor === "string") {
      return thumbColor
    }

    return value ? thumbColor.on : thumbColor.off
  }, [value])

  return (
    <Switch
      {...props}
      trackColor={_trackColor}
      thumbColor={_thumbColor}
      ios_backgroundColor={_trackColor?.false}
      value={value}
    />
  );
};

export default RNSwitch;