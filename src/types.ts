import type { ViewStyle } from "react-native";

export interface ISwitchProps {
  value: boolean
  disabled?: boolean
  thumbColor?: { on: string; off: string } | string
  trackColor?: { on: string; off: string } | string
  trackDecorationColor?: { on: string; off: string } | string
  onValueChange?: (value: boolean) => void
  style?: ViewStyle
  design?: "default" | "material"
}