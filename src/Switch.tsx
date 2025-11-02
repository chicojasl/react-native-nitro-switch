
import { Platform } from 'react-native';
import type { ISwitchProps } from './types';
import MaterialSwitch from './MaterialSwitch';
import RNSwitch from './RNSwitch';

const Switch = ({ design,...props }: ISwitchProps) => {
  if (Platform.OS === "android" && design === "material") {
    return MaterialSwitch(props)
  }

  return RNSwitch(props)
};

export default Switch;