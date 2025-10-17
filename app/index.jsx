import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemeLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText title={false}>The Number 1</ThemedText>
      <Spacer height={10} />
      <ThemedText
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
        title={true}
      >
        Reading List App
      </ThemedText>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Link href="/login" style={styles.link}>
          <ThemedText>Login </ThemedText>
        </Link>
        <Link href="/register" style={styles.link}>
          <ThemedText>Register </ThemedText>
        </Link>
        <Link href="/profile" style={styles.link}>
          <ThemedText>Profile</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
};

export default Home;

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
