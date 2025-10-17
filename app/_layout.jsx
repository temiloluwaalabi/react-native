import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title, // color of the back button
          headerTitleStyle: { fontWeight: "bold" }, // weight of header title color
        }}
      >
        <Stack.Screen
          name="index"
          // options={{
          //   headerTitle: () => (
          //     <Text style={{ fontSize: 18, fontWeight: "bold" }}>Home</Text>
          //   ),
          // }}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen name="about" options={{ headerTitle: "About" }} />
        <Stack.Screen name="login" options={{ headerTitle: "Sign In" }} />
        <Stack.Screen name="register" options={{ headerTitle: "Sign Up" }} />
        <Stack.Screen
          name="contact"
          options={{ headerTitle: "Contact", headerShown: false }}
        />
        ;
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
