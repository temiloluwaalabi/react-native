import { Pressable, StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import { Colors } from "../../constants/colors";
import ThemedButton from "../../components/ThemedButton";

const login = () => {
  const handleSubmit = () => {
    console.log("Register Button Clicked");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text
          style={{
            color: "#f2f2f2",
          }}
        >
          Login
        </Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText
          style={{
            textAlign: "center",
          }}
        >
          Don't have an account? Sign Up
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
