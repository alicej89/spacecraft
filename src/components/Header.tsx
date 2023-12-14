import { Text } from "react-native";

type Title = {
  titleLabel: string;
};

export function Header(props: Title) {
  return <Text>{props.titleLabel} for React Native</Text>;
}
