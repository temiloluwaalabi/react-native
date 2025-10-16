import { Link } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/colors";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text
        style={[
          styles.title,
          {
            color: theme.text,
          },
        ]}
      >
        About Page
      </Text>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Link
          href="/"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "blue",
          }}
        >
          Back Home
        </Link>
        <Link
          href="/contact"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "blue",
          }}
        >
          Contact Page
        </Link>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "400",
    fontSize: 18,
  },
});
