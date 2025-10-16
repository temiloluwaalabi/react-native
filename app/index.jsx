import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>The Number 1</Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Reading List App
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
          href="/about"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "blue",
          }}
        >
          About Page
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginVertical: 20,
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: "400",
    fontSize: 18,
  },
});
