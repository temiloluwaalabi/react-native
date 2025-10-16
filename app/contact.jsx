import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
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
          href="/about"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "blue",
          }}
        >
          About Page
        </Link>
      </View>
    </View>
  );
};

export default Contact;

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
