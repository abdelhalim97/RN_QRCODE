import { KeyboardType, TextInput } from "react-native";
export interface ButtonDarkInt {
  text: string;
  fnc: () => void;
  colorFrom?: string;
  colorTo?: string;
}
export interface InputGradiesnt {
  // text: string;
  keyboardType?: KeyboardType | undefined;
  text: string;
  // fnc: () => void;
  // setState: () => void;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  colorFrom?: string;
  colorTo?: string;
  autoFocus?: boolean;
}