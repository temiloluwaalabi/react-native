import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View
        style={[
          {
            backgroundColor: theme.background,
          },
          style,
        ]}
        {...props}
      />
    );

  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingLeft: inset.left,
          paddingRight: inset.right,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
