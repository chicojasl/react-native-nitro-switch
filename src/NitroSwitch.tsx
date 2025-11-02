import type { NitroSwitchProps, NitroSwitchMethods } from './views/nitro-switch.nitro';
import type { ReactNativeView } from 'react-native-nitro-modules';

/**
 * iOS stub for NitroSwitch. 
 * Nitro views only exist on Android, so this is a no-op.
 */
export const NitroSwitch: ReactNativeView<NitroSwitchProps, NitroSwitchMethods> = null as any;
