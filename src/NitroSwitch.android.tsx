import { getHostComponent, type HybridRef } from 'react-native-nitro-modules'
import NitroSwitchConfig from '../nitrogen/generated/shared/json/NitroSwitchConfig.json'
import type {
  NitroSwitchProps,
  NitroSwitchMethods,
} from './views/nitro-switch.nitro'


export const NitroSwitch = getHostComponent<NitroSwitchProps, NitroSwitchMethods>(
  'NitroSwitch',
  () => NitroSwitchConfig
)

export type NitroSwitchRef = HybridRef<NitroSwitchProps, NitroSwitchMethods>
