import type {
  HybridView,
  HybridViewProps,
  HybridViewMethods,
} from 'react-native-nitro-modules'

type ColorProp = { off: number; on: number }

export interface NitroSwitchProps extends HybridViewProps {
  value: boolean
  onValueChange?: (value: boolean) => void
  disabled?: boolean
  thumbColor?: ColorProp | number;
  trackColor?: ColorProp | number;
  trackDecorationColor?: ColorProp | number;
}

export interface NitroSwitchMethods extends HybridViewMethods {}

export type NitroSwitch = HybridView<NitroSwitchProps, NitroSwitchMethods, { android: 'kotlin' }>