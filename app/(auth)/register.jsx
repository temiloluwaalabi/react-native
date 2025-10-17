import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("Register Button Clicked");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Create an Account
        </ThemedText>

        <ThemedTextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          style={{
            width: "100%",
            marginBottom: 20,
          }}
        />
        <ThemedTextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={{
            width: "100%",
            marginBottom: 20,
          }}
          secureTextEntry
        />
        <ThemedButton onPress={handleSubmit}>
          <Text
            style={{
              color: "#f2f2f2",
            }}
          >
            Register
          </Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href="/login">
          <ThemedText
            style={{
              textAlign: "center",
            }}
          >
            Login instead
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
});
